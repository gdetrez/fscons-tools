'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser().navigateTo('#/view1');
    });

    it('should render view1 when user navigates to /view1', function() {
      expect(element('[ng-view] h1:first').text()).
        toMatch(/Tool to help you publish FSCONS videos/);
    });

    it('should sets the default year to 2012', function() {
      expect(element('select').attr('value')).
        toMatch(/2012/);
    });

    describe("When all data has been entered", function(){
      beforeEach(function() {
        input('title').enter('Superman: Why?');
        input('full_name').enter('John Snow');
        input('twitter_name').enter('@noone');
        input('identica_name').enter('@someone');
        input('ogv_url').
          enter("https://archive.org/details/12SAT011615-theydontwantyouto");
        input('youtube_url').enter('http://youtu.be/yNGov5v6jpM');
        input('abstract').enter('bla bla bla');
      });

      it('should print a tweet according to the template', function() {
        expect(element('pre#twitter').text()).
          toBe("New video: @noone, Superman: Why? http://youtu.be/yNGov5v6jpM #FSCONS2012");
      });

      it('should print a dent according to the template', function() {
        expect(element('pre#identica').text()).
          toBe("New video: @someone, Superman: Why? http://youtu.be/yNGov5v6jpM #FSCONS2012");
      });

      it('should print the youtube title and abstract', function() {
        expect(element('pre#youtube-title').text()).
          toBe("John Snow: Superman: Why?");
        expect(element('pre#youtube-description').text()).
          toBe("John Snow: Superman: Why?\n\nDownload video: https://archive.org/details/12SAT011615-theydontwantyouto\n\nbla bla bla\n");
      });
    });
  });
});
