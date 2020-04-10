<!--

    Base component for poryect manager application

-->

<script>
import BaseAppComponent from "../../rfvue/components/base/baseapp/BaseAppComponent";
import AppConfig from "./../config/AppConfig";

// Load i18n for aplication
AppConfig.configApp();

export default {
  extends: BaseAppComponent,
  name: "RFPMAppComponent",
  props: {},
  methods: {
    /**
     * Method for load configuration for app
     */
    loadConfigApp: function() {}
  }
};
</script>