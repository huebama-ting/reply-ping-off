/**
 * @name ReplyPingOff
 * @author huebama-ting
 * @description Turn off ping when replying to messages. To send a ping, click the ping button before sending the message.
 * @version 1.0.1
 * @source https://github.com/huebama-ting/reply-ping-off
 */
 'use strict'
 module.exports = class ReplyPingOffPlugin {
  static pingButtonSelector = 'div[role=switch]';

  start() {
    document.addEventListener('keypress', this.clickEventHandler);
  }

  stop() {
    document.removeEventListener('keypress', this.clickEventHandler);
  }

  clickEventHandler = (event) => this.clickReplyButton(event);

  clickReplyButton() {
    const pingButton = document.querySelector(ReplyPingOffPlugin.pingButtonSelector);

    // Do not do anything if the element is not found
    if (!pingButton) {
      return;
    }

    // Do not re-enable on the next keypress once the ping has been disabled 
    if (pingButton.ariaChecked === 'true') {
      pingButton.click();
    }
  }
}