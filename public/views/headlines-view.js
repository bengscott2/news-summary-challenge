(function (exports) {
  function HeadlinesView (headlines) {
    var html = []
    var headlines = headlines

    function returnHTML () {
      html = headlines.map(function(headline) {
        return (`<img src="${headline.getPicLink()}"><br><a href="${headline.getLink()}">${headline.getHeadline()}</a><br><br>`)
      })
      return `<ul>${html.join('')}</ul>`
    }

    return {
      returnHTML: returnHTML
    }
  }
  exports.HeadlinesView = HeadlinesView
})(this);
