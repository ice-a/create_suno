# create_suno

# [申请id地址](https://suno.com/song/fd478f8c-04df-40b3-b5a3-28dce4c2280e)
- 选择Suno 音乐生成
- 申请了API后，在 Credentials 查找到 Token,点击复制这个值备用，类似这样的：8125d23343388839c6e

# 使用
```
# 启动后端
cd backend
#修改server.js中的  "authorization": "Bearer 1d658d84eb7145b08ccffd02cf33cfdc", 1d658d84eb7145b08ccffd02cf33cfdc->上一步复制的Token
docker build -t backend .
docker run -itd --name back -p 3000:3000 backend
# 启动前端
cd frontend
docker build -t frontend .
docker run -itd --name front -p 8080:8080 frontend
# 访问
http://localhost:8080
```