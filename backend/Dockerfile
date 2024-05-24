# 第一阶段：安装依赖
FROM node:alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# 第二阶段：复制依赖并添加应用
FROM node:alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# 暴露端口
EXPOSE 3000

# 定义启动命令
CMD ["npm", "start"]