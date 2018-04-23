<!--
Edited By: @zhouxiaoxing
Edited Time: 2018-4-13
Description: loginBox
-->
<template>
  <div class="loginBox">

    <!--Login box-->
    <div class="login">
      <div class="loginBoxCenter">
        <!--Account-->
        <div class="inputBox">
          <div class="input-title user"></div>
          <div class="input-body">
            <p><input maxlength="20" @keyup.enter='testSubmit()' v-model="username" type="text" id="login-username"
                      name="username" class="loginInput" required="required" autocomplete="off" placeholder="请输入账号"
                      value=""/></p>
          </div>
        </div>
        <!--password-->
        <div class="inputBox">
          <div class="input-title password"></div>
          <div class="input-body">
            <p><input maxlength="16" ref="pwd" @keyup.enter='testSubmit()' v-model="surfacePassword" type="text"
                      id="login-password" name="" class="loginInput" required="required" placeholder="请输入密码" value=""
                      onpaste="return false"/></p>
          </div>
        </div>
      </div>
      <!--submit-->
      <div class="loginBoxButtons btn-submit " @click.stop='testSubmit()'>登<span></span>录</div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  let isTest = false;
  export default {
    name: 'Login',
    components: {},
    data() {
      return {
        username: '',
        surfacePassword: '',
        isTrue: true
      }
    },
    watch: {},

    methods: {
      goToSubmit() {
        let _this = this;
        _this.$router.push("/main/dashboard");
      },

      testSubmit (){
        this.goToSubmit();
      },

      updated() {

      },
      mounted() {

      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "Login.less";
  @import "../../less/transition.less";

  @media (max-width: 1279.9px) {
    .loginBox, .resetPasswordBox {
      width: 400px;
      height: 400px;
      min-width: 400px;
      margin-left: -150px;
      margin-top: -17%;
      .logoBox {
        background-size: 100%;
        position: relative;
        height: 62px;
        width: 270px;
        margin: 0 auto 29px;
        line-height: 62px;
        span {
          font-size: 25px;
          color: #fff;
          b {
            font-size: 36px;
          }
        }
      }
    }
  }

  @media (min-width: 1280px) {
    .loginBox, .resetPasswordBox {
      width: 400px;
      height: 400px;
      min-width: 400px;
      margin-left: -200px;
      margin-top: -17%;
      .logoBox {
        background-size: 100%;
        height: 62px;
        width: 270px;
        margin: 0 auto 29px;
        position: relative;
        line-height: 62px;
        span {
          font-size: 25px;
          color: #fff;
          b {
            font-size: 36px;
          }
        }
      }
      .login {
        width: 297px;
        .loginBoxCenter {
          .inputBox {
            height: 59px;
            padding: 22px 0 10px;
            &:nth-child(3) {
              padding-top: 16px;
            }
            .input-title {
              width: 16%;
              background-position-x: 15px !important;
              background-position-y: 4px !important;
              &.user, &.password, &.mob {
                &:after {
                  left: 48px
                }
              }
            }
            .input-body {
              width: 83%;
              margin-top: -2px;
              p {
                .loginInput {
                  padding: 0px 0px 8px 18px;
                  font: 14px 'Microsoft YaHei', '微软雅黑';
                }
              }
            }
          }
        }
        .loginBoxButtons {
          &.btn-submit {
            height: 47px;
            line-height: 47px;
            font-size: 18px;
            margin-bottom: 0px;
            margin-top: 13px;
          }
        }
      }
    }
  }

  @media (min-width: 1580px) {
    .loginBox, .resetPasswordBox {
      width: 500px;
      height: 500px;
      min-width: 500px;
      margin-left: -250px;
      margin-top: -17%;
      .logoBox {
        background-size: 100%;
        position: relative;
        width: 313px;
        height: 75px;
        line-height: 75px;
        margin: 0 auto 43px;
        span {
          font-size: 29px;
          color: #fff;
          b {
            font-size: 44px;
          }
        }
      }
      .login {
        width: 370px;
        .loginBoxCenter {
          .inputBox {
            height: 75px;
            padding: 22px 0 10px;
            &:nth-child(3) {
              padding-top: 16px;
            }
            .input-title {
              width: 17%;
              background-position-x: 19px !important;
              background-position-y: 6px !important;
              &.user, &.password, &.mob {
                &:after {
                  left: 62px
                }
              }
            }
            .input-body {
              width: 83%;
              margin-top: 0px;
              p {
                .loginInput {
                  margin-top: 0px;
                  padding: 2px 0px 8px 20px;
                  font: 16px 'Microsoft YaHei', '微软雅黑';
                }
              }
            }
          }
        }
        .loginBoxButtons {
          &.btn-submit {
            height: 57px;
            line-height: 57px;
            font-size: 22px;
            margin-bottom: 7px;
            margin-top: 23px;
          }
        }
      }
    }
  }

  @media (min-width: 1900px) {
    .loginBox, .resetPasswordBox {
      width: 600px;
      height: 500px;
      min-width: 600px;
      margin-left: -300px;
      margin-top: -18%;
      .logoBox {
        background-size: 100%;
        height: 93px;
        width: 393px;
        line-height: 90px;
        margin: 0 auto 56px;
        position: relative;
        span {
          font-size: 36px;
          color: #fff;
          margin-top: -10px;
          b {
            font-size: 52px;
          }
        }
      }
      .login {
        width: 446px;
        .loginBoxCenter {
          .inputBox {
            height: 89px;
            padding: 29px 0 10px;
            &:nth-child(3) {
              padding-top: 20px;
            }
            .input-title {
              width: 17%;
              background-position-x: 19px !important;
              background-position-y: 6px !important;
              &.user, &.password, &.mob {
                &:after {
                  left: 68px
                }
              }
            }
            .input-body {
              width: 83%;
              margin-top: 2px;
              p {
                .loginInput {
                  margin-top: 0px;
                  padding: 2px 0px 8px 10px;
                  font: 16px 'Microsoft YaHei', '微软雅黑';
                }
              }
            }
          }
        }
        .loginBoxButtons {
          &.btn-submit {
            height: 66px;
            line-height: 66px;
            font-size: 28px;
            margin-bottom: 13px;
            margin-top: 29px;
          }
        }
      }
    }
  }
</style>
