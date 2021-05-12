#!/bin/bash
#author @zmns
#auto install BlogSystem into your linux
echo -e "start install scripts ...\n \033[32m -----------------------------\033[0m"
echo -e "请选择本次执行功能："
echo "1、环境安装"
echo "2、项目部署"
echo "--------------------------------------------------------"
echo "第一次运行请选择环境安装，安装后对拉取的项目进行配置、项目目录将存放于/usr/local/installTmp"
echo "请输入选择选项："
read option
if [option == '1']
then
	mkdir /usr/local/installTmp
	cp ./* 
	cd /usr/local/installTmp
	mkdir /root/blog
	if [ $UID -ne 0 ]
	then
		echo "非Root用户权限，请确认Root权限运行此脚本！"
		sleep 2
		exit 4
	fi	
	echo "install git tool into your system..."
	echo "请输入您的Linux包管理类型, \"apt\" or \"yum\":"
	read ossClass
	if [ "$ossClass" != "yum" || "$ossClass" != "apt" ]
	then
		echo "您的输入有误!\n请重试:"
		read ossClass
	fi
	PackageManager $ossClass git
	PackageManager $ossClass gcc

	mv ./DockerNginxConf /root/blog/
	curl -sSL https://get.daocloud.io/docker | sh
	echo "请输入您的Docker镜像地址，如无需配置镜像源请直接回车:"
	read DockerMirrorURL
	if [ ! -z $DockerMirrorURL ]
	then
		curl -sSL https://get.daocloud.io/daotools/set_mirror.sh | sh -s $DockerMirrorURL
	else
		break
	fi
	sudo systemctl start docker
	docker pull ubuntu:16.04
	docker pull nginx
	cat > DockerInitFiles/sources.list <<EOF
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security multiverse
EOF
	mkdir DockerTmp
	cat > DockerTmp/Flask/Dockerfile <<EOF
FROM ubuntu:16.04
COPY /usr/local/installTmp/app /root/flask/
COPY  /usr/local/installTmp/requirements.txt /root/flask/
MAINTAINER ZMNS
RUN cp /etc/apt/sources.list /etc/apt/sources.list.bak && \
    cp /usr/local/initcaches/apt/sources.list /etc/apt/ && \
    apt update && \
	apt install python3 python-pip && \
	cd /root/flask && pip install -r requestments.txt &&\
EXPOSE 2333
CMD python3 /root/flask/app/blog.py
EOF
	cat > DockerTmp/Spring/Dockerfile <<EOF
	FROM ubuntu:16.04
	COPY /usr/local/installTmp/JavaSpring /root/
	MAINTAINER ZMNS
	RUN cp /etc/apt/sources.list /etc/apt/sources.list.bak && \
	    cp /usr/local/initcaches/apt/sources.list /etc/apt/ && \
	    apt update && \
		apt install -y openjdk-8-jdk
	EXPOSE 2233
	CMD java -jar /root/JavaSpring/blog-0.0.1-SNAPSHOT.jar
EOF
elif [option == '2']
	cd /usr/local/installTmp
	sudo docker network create --driver=bridge --subnet=10.10.0.0/24 blog
	docker build -t Flask-node:1.0 ./DockerTmp/Flask/
	docker build -t Spring-node:1.0 ./DockerTmp/Spring/
	docker load /usr/local/installTmp/blogmysql.tar
	docker run -itd --name nginx --network=blog --ip 10.10.0.1 -p 80:80 -v /root/blog/DockerNginxConf/conf:/etc/nginx -v /root/blog/DockerNginxConf/html:/usr/share/nginx/html nginx
	docker run -d --name blog-flask --network=blog --ip 10.10.0.2 Flask-node:1.0
	docker run -d --name blog-spring --network=blog --ip 10.10.0.3 Spring-node:1.0
	docker run -d --name blog-mysql --network=blog --ip 10.10.0.4 blogmysql:1.0