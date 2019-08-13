const url = '../docs/sample.pdf';

let pdfDoc             = null,
    pageNum            = 1,
    pageIsRendering    = false,
    pageIsNumIsPending = null;

const scale   = 1.5,
      canvas  = document.querySelector('#pdf-render'),
      ctx     = canvas.getContext('2d');

