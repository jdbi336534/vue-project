<template>
  <div class="login-container">
    <header>
      <ul>
        <li v-link="{ path: '/index/backmy' }" class="iconfont">&#xf0292;</li>
        <li>登陆</li>
        <li></li>
      </ul>
    </header>
    <section>
      <nav>
        <img src="http://cdn04.b5mcdn.com/bhbcdn/wap-main/build_wap/htmlImg/login/login_banner.png">
      </nav>
      <div class="logintxt">
        <div class="input">
            <i class="iconfont">&#xe6fa;</i>
            <input type="username" placeholder="请输入手机号码/邮箱">
        </div>

          <div class="input">
              <i class="iconfont">&#xe674;</i>
              <input type="password" placeholder="请输入密码">
          </div>
          <div class="input">
              <div class="login">登陆</div>
              <div class="forget">
                <span class="lspan" v-link="{ path: '/goreg' }">立即注册</span>
                  <span class="rspan">找回密码？</span>
              </div>
          </div>
      </div>
    </section>

  </div>
</template>
