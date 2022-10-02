let assert = require('assert');
//import {Participant} from '../participant.js'
import {shuffleArray, mailIsValid/*, download*/} from '../functions.js'

// Exemple de test, check https://mochajs.org/
/*
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
*/
describe('Array', function () {
    describe('#shuffleArray()', function () {
      it('should shuffle a table', function () {
        let tab_no_shuffled = [0,1,2,3,4,5,6,7,8,9]
        assert.notEqual(shuffleArray(tab_no_shuffled), tab_no_shuffled);
      });
    });
  });

describe('Mail Format', function () {
  describe('#mailIsValid()', function () {
    it('should return true if the mail format is valid', function () {
      let test_mail_1_true = "test@gmail.com"
      let test_mail_2_false = "test@g"
      let test_mail_3_false = "test@gmail."
      let test_mail_4_false = "test"
      assert.equal(mailIsValid(test_mail_1_true), true);
      assert.notEqual(mailIsValid(test_mail_2_false), true);
      assert.notEqual(mailIsValid(test_mail_3_false), true);
      assert.notEqual(mailIsValid(test_mail_4_false), true);
    });
  });
});