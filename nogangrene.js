// Checking for relevant page

var terms = [ 'buboes',
              'congenital disorder',
              'diagnosis',
              'disease',
              'ebola',
              'gangrene',
              'herpes',
              'infection',
              'lesions',
              'medical condition',
              'necrosis',
              'prolapse',
              'putrefaction',
              'sore',
              'superating' ]

var active = false

for (i = 0; i < terms.length; i++) {
  if (document.body.innerHTML.indexOf(terms[i]) != -1) {
    active = true
    continue
  }
}

if (true == true) {
  function change(x, y) {
    return function() {
      x.src = y
      x.srcset = y
    }
  }

  function changepermanently(x, y) {
    return function() {
      x.src = y
      x.onmouseout=function() {}
    }
  }

  var alpaca=chrome.extension.getURL("alpaca.jpg")
  var imageTags = document.getElementsByTagName("img"); // Returns array of <img> DOM nodes
  console.log('Found ', imageTags.length, ' image tags.')
  var orig = {}
  for (i=0; i < imageTags.length; i++) {
    orig=imageTags[i].src

    imageTags[i].onmouseover = change(imageTags[i], orig)

    imageTags[i].onmouseout=function() {
      this.src=alpaca
      this.srcset=alpaca
    }
    imageTags[i].onclick = changepermanently(imageTags[i], orig)
    console.log('Replacing ', orig, ' with ', alpaca, '.')
    imageTags[i].src=alpaca
    imageTags[i].srcset=alpaca
  }
}
