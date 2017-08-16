/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse20012Sender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20012Sender'));
  } else {
    // Browser globals (root is window)
    if (!root.SendinBlueApi) {
      root.SendinBlueApi = {};
    }
    root.SendinBlueApi.GetSmtpTemplateOverview = factory(root.SendinBlueApi.ApiClient, root.SendinBlueApi.InlineResponse20012Sender);
  }
}(this, function(ApiClient, InlineResponse20012Sender) {
  'use strict';




  /**
   * The GetSmtpTemplateOverview model module.
   * @module model/GetSmtpTemplateOverview
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>GetSmtpTemplateOverview</code>.
   * @alias module:model/GetSmtpTemplateOverview
   * @class
   * @param id {Number} ID of the template
   * @param name {String} Name of the template
   * @param subject {String} Subject of the template
   * @param isActive {Boolean} Status of template (true=active, false=inactive)
   * @param testSent {Boolean} Status of test sending for the template (true=test email has been sent, false=test email has not been sent)
   * @param replyTo {String} Email defined as the \"Reply to\" for the template
   * @param toField {String} Customisation of the \"to\" field for the template
   * @param tag {String} Tag of the template
   * @param htmlContent {String} HTML content of the template
   * @param createdAt {String} Creation date of the template
   * @param modifiedAt {String} Last modification date of the template
   */
  var exports = function(id, name, subject, isActive, testSent, replyTo, toField, tag, htmlContent, createdAt, modifiedAt) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['subject'] = subject;
    _this['isActive'] = isActive;
    _this['testSent'] = testSent;

    _this['replyTo'] = replyTo;
    _this['toField'] = toField;
    _this['tag'] = tag;
    _this['htmlContent'] = htmlContent;
    _this['createdAt'] = createdAt;
    _this['modifiedAt'] = modifiedAt;
  };

  /**
   * Constructs a <code>GetSmtpTemplateOverview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSmtpTemplateOverview} obj Optional instance to populate.
   * @return {module:model/GetSmtpTemplateOverview} The populated <code>GetSmtpTemplateOverview</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('isActive')) {
        obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
      }
      if (data.hasOwnProperty('testSent')) {
        obj['testSent'] = ApiClient.convertToType(data['testSent'], 'Boolean');
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = InlineResponse20012Sender.constructFromObject(data['sender']);
      }
      if (data.hasOwnProperty('replyTo')) {
        obj['replyTo'] = ApiClient.convertToType(data['replyTo'], 'String');
      }
      if (data.hasOwnProperty('toField')) {
        obj['toField'] = ApiClient.convertToType(data['toField'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
      if (data.hasOwnProperty('htmlContent')) {
        obj['htmlContent'] = ApiClient.convertToType(data['htmlContent'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the template
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name of the template
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Subject of the template
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Status of template (true=active, false=inactive)
   * @member {Boolean} isActive
   */
  exports.prototype['isActive'] = undefined;
  /**
   * Status of test sending for the template (true=test email has been sent, false=test email has not been sent)
   * @member {Boolean} testSent
   */
  exports.prototype['testSent'] = undefined;
  /**
   * @member {module:model/InlineResponse20012Sender} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * Email defined as the \"Reply to\" for the template
   * @member {String} replyTo
   */
  exports.prototype['replyTo'] = undefined;
  /**
   * Customisation of the \"to\" field for the template
   * @member {String} toField
   */
  exports.prototype['toField'] = undefined;
  /**
   * Tag of the template
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * HTML content of the template
   * @member {String} htmlContent
   */
  exports.prototype['htmlContent'] = undefined;
  /**
   * Creation date of the template
   * @member {String} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * Last modification date of the template
   * @member {String} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;



  return exports;
}));

