<!--

    Base component for poryect manager application

-->

<script>
import BaseAppComponent from "../../rfvue/components/base/baseapp/BaseAppComponent";

export default {
  extends: BaseAppComponent,
  name: "RFPMAppComponent",
  props: {},
  methods: {
    /**
     * Method for load configuration for app
     */
    loadConfigApp: function() {
      // Set name for app 
      this.getVueContext().appName = 'RFPM';
    }
  }
};
</script>