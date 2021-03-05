import oss2
from app import config


def putToImg(filePath, ossPath):
    auth = oss2.Auth(config.OSSIMG.AccessKeyId, config.OSSIMG.AccessKeySecret)
    bucket = oss2.Bucket(auth, config.OSSIMG.Endpoint, config.OSSIMG.Bucket)
    bucket.put_object_from_file(ossPath, filePath)
    url = "https://" + config.OSSIMG.Endpoint + "/" + config.OSSIMG.Bucket + "/" + ossPath
    return url


def putToArc(filePath, ossPath):
    auth = oss2.Auth(config.OSSARC.AccessKeyId, config.OSSARC.AccessKeySecret)
    bucket = oss2.Bucket(auth, config.OSSARC.Endpoint, config.OSSARC.Bucket)
    bucket.put_object_from_file(ossPath, filePath)
    url = "https://" + config.OSSARC.Endpoint + "/" + config.OSSARC.Bucket + "/" + ossPath
    return url