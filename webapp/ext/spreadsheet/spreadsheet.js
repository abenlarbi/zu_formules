sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        openSpreadsheetUploadDialog: async function (event) {
            this._view.setBusyIndicatorDelay(0);
            this._view.setBusy(true);
            this.spreadsheetUpload = await this._view
              .getController()
              .getAppComponent()
              .createComponent({
                usage: "spreadsheetImporter",
                async: true,
                componentData: {
                  context: this,
                  createActiveEntity : true
                },
              });
            //   this.spreadsheetUpload.attachChangeBeforeCreate(function (event) {
            //     let payload = event.getParameter("payload");
            //     payload.IsActiveEntity = true ;
            //     return payload;
            // }, this);
            this.spreadsheetUpload.openSpreadsheetUploadDialog();
            this._view.setBusy(false);
          }
    };
});
