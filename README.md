# 如何启动项目
## 1. back-end （后端代码）
后端技术栈：Springboot2, JDK版本为 v_1.8，打开项目后：<br/>
1. 首先安装依赖； <br/>
2. 执行项目根目录下的 **test.sql** 脚本文件，导入本地 mysql数据库中； <br/>
3. 导入成功后，mysql中会有 test 数据库 以及 Mobile_Food_Facility_Permit 数据表；
4. 修改项目中的 `application.yml` 文件中的 username 和 password, 确保数据库连接成功；
5. 运行 application 启动类，然后，前端服务运行在：http://localhost:8888 <br/>

<img width="988" alt="image" src="https://github.com/wangzhenwu111/TEST/assets/169468177/33a98e61-9c24-4842-a0b1-ae4f07d2c110">


## 2. front-end （前端代码）
首先确保你的本地有*node*环境，node版本建议使用v_18 <br/>
第一步：`npm install`, 等待依赖全部安装完毕后执行下列步骤：<br/>
第二步：`npm run start` <br/>
然后，前端服务运行在：http://localhost:3000/home <br/>

**效果图如下：**
<img width="1432" alt="image" src="https://github.com/wangzhenwu111/TEST/assets/169468177/570bd4b6-fe39-450b-be2b-9e04fa5fb660">
