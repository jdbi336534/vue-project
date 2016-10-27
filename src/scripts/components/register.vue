<template>
  <div class="register-container">
    <header>
      <ul>
        <li v-link="{ path: '/backlogin' }" class="iconfont">&#xf0292;</li>
        <li>登陆</li>
        <li></li>
      </ul>
    </header>
    <section>
      <div class="logintxt">
        <div class="input">
            <input type="username" placeholder="请输入手机号码">
        </div>
        <div class="input">
            <input type="text" placeholder="请输入验证码">
            <img class="checkcode" src="http://ucenter.b5m.com/imageValidateCode.htm">
            <div class="text_wrap">
                        <span class="not_clear">
                            看不清
                        </span>
                        <span class="again">
                            换一张
                        </span>
                </div>
        </div>

        <div class="input">
            <input class="message" type="text" placeholder="请输入验证码" disabled="disabled">
           <input id="getCode" type="button"  value="获取验证码">
        </div>
<div class="input">
  <input type="password" placeholder="请输入密码" disabled="disabled">
</div>

<div class="protocol">
  <input id="protocol" type="checkbox" checked="checked">
  <label for="protocol">我已阅读并同意<a id="toProtocol" href="javascript:void(0);">《帮海贝用户注册协议》</a></label>
</div>
<input type="button" id="registerBtn"  value="注册">
      </div>
    </section>

  </div>
</template>
<script>
</script>
