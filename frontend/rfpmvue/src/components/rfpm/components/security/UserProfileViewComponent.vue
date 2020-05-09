<template>
  <div class="FullContainer" :id="getId()">
    <div class="UserProfileMessage">
      <InputPasswordComponent
        :disabled="false"
        :required="true"
        :element="userProfile"
        :property="'password'"
        :max="50"
        :label="'Password'"
      />
    </div>
    <div class="UserProfileAcctions">
      <button
        class="UserProfileButton UserProfileAcctionsAcctionsFirst"
        v-on:click="saveUserProfileHandlerViewError"
      >
        <i class="far fa-thumbs-up"></i>
      </button>
    </div>
  </div>
</template>

<script>
import BaseComponent from "../../../rfvue/components/base/BaseComponent";
import InputPasswordComponent from "../../../rfvue/components/inputpassword/InputPasswordComponent";
import CommonsUtils from "../../../rfvue/utils/CommonsUtils";
import RFPMConstantsService from "../../constants/RFPMConstantsService";

export default {
  extends: BaseComponent,
  name: "UserProfileViewComponent",
  components: {
    InputPasswordComponent
  },
  methods: {
    /**
     * Save user profile with handler view error
     */
    saveUserProfileHandlerViewError: async function() {
      const self = this;
      self.getVueContext().applyAsyncFunctionWithHandlerViewError(() => {
        return self.saveUserProfile();
      });
    },

    /**
     * Save user profile
     */
    saveUserProfile: async function() {
      this.showWaitStatus(this.tab);

      let valid = await this.getVueContext().validateContainer(this.getId());

      if (CommonsUtils.isNull(valid) || valid) {
        let data = {
          userId: this.getExtraData("App").getUserId(),
          password: this.userProfile.password
        };
        let userService = await this.getVueContext().getService(
          RFPMConstantsService.SERVICE_USER
        );

        if (CommonsUtils.isNotNull(userService)) {
          let response = await userService.editUserProfile(data);

          if (CommonsUtils.isNotNull(response)) {
            if (this.getVueContext().isElectronApp()) {
              response = JSON.parse(response);
              valid = response.statusProp === 200;
            } else {
              valid = response.status === 200;
            }
          }
        }

        if (valid) {
          this.addMessageSucces(this.i18n('rfpm.userProfile.save.success'));
          this.closeModal();
        } else {
          this.addMessageError(this.i18n('rfpm.userProfile.save.error'));
        }
      }

      this.hideWaitStatus(this.tab);
    }
  },
  data() {
    return {
      userProfile: {
        password: null
      }
    };
  }
};
</script>
<style>
.UserProfileModal {
  width: 418px;
  max-height: 300px !important;
  top: calc(50% - 250px) !important;
  left: calc(50% - 250px) !important;
}
</style>
<style scoped>
.UserProfileMessage {
  width: 100%;
  float: left;
  clear: left;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--rf-fontColor, #466289);
}

.UserProfileAcctions {
  margin-top: 10px;
  width: 100%;
  float: left;
  clear: left;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-top: 1px solid var(--rf-fontColor, #466289);
}

.UserProfileAcctionsAcctionsFirst {
  margin-left: 42%;
}

.UserProfileButton {
  width: 30px;
  height: 30px;
  color: var(--rf-buttonColor, #466289);
  background-color: transparent;
  border: none;
  float: left;
  cursor: pointer;
  outline: none;
}
</style>