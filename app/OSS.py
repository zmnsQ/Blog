import oss2
from app import config


def putToImg(path,fileObject):
    auth = oss2.Auth(config.OSSIMG.AccessKeyId, config.OSSIMG.AccessKeySecret)
    bucket = oss2.Bucket(auth, config.OSSIMG.Endpoint, config.OSSIMG.Bucket)
    bucket.put_object(path, fileObject)
    url = "https://"+ config.OSSIMG.BucketZone + "/" + path
    return url


def putToArc(path,fileObject):
    auth = oss2.Auth(config.OSSARC.AccessKeyId, config.OSSARC.AccessKeySecret)
    bucket = oss2.Bucket(auth, config.OSSARC.Endpoint, config.OSSARC.Bucket)
    bucket.put_object(path, fileObject)
    url = "https://" + config.OSSARC.BucketZone + "/" + path
    return url