//import {shuffleArray, mailIsValid, download} from '../functions.js'
let assert = require('assert');
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

/*describe('Mail Format', function () {
  describe('#mailIsValid()', function () {
    it('should return true if the mail format is valid', function () {
      let test_mail_1_true = "test@gmail.com"
      let test_mail_2_false = "test@g"
      let test_mail_3_false = "test@gmail."
      let test_mail_4_false = "test" 
      assert.equal(mailIsValid(test_mail_1_true), true);
      assert.equal(mailIsValid(test_mail_2_false), false);
      assert.equal(mailIsValid(test_mail_3_false), false);
      assert.equal(mailIsValid(test_mail_4_false), false);
    });
  });
});*/

describe('Mail Format 1', function () {
  describe('#mailIsValid()', function () {
    it('should return true if the mail format 1 is valid', function () {
      let test_mail_1_true = "test@gmail.com"
      assert.equal(mailIsValid(test_mail_1_true), true);
    });
  });
});
describe('Mail Format 2', function () {
  describe('#mailIsValid()', function () {
    it('should return true if the mail format 2 is valid', function () {
      let test_mail_2_false = "test@g"
      assert.equal(mailIsValid(test_mail_2_false), false);
    });
  });
});
describe('Mail Format 3', function () {
  describe('#mailIsValid()', function () {
    it('should return true if the mail format 3 is valid', function () {
      let test_mail_3_false = "test@gmail."
      assert.equal(mailIsValid(test_mail_3_false), false);
    });
  });
});
describe('Mail Format 4', function () {
  describe('#mailIsValid()', function () {
    it('should return true if the mail format 4 is valid', function () {
      let test_mail_4_false = "test" 
      assert.equal(mailIsValid(test_mail_4_false), false);
    });
  });
});



// Fonction pour mélanger un tableau
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// Fonction pour vérifier la validité d'un mail
function mailIsValid(mail){
  let regex = new RegExp('[a-zA-Z-0-9]+@[a-zA-Z]+.[a-zA-Z-0-9]{2,}$');
  let check = false;
  if(regex.test(mail)){
      check = true;
  }
  return check
}