import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { fonts } from '../fonts';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable()
export class ShareService {
  constructor() {}

  shareOrder(order: Order) {
    const doc = new jsPDF();
    doc.addFileToVFS('MyFont.ttf', fonts.alef);
    doc.addFont('MyFont.ttf', 'MyFont', 'normal');
    doc.setFont('MyFont');
    doc.setR2L(true);
    doc.text(
      order.time
        .toLocaleDateString()
        .split('')
        .reverse()
        .join(''),
      doc.canvas.width / 2,
      20
    );
    autoTable(doc, {
      margin: { top: 30 },
      head: [['כמות', 'פריט', 'ספק']],
      body: order.items
        .sort(function(a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
        .filter(
          i => i.amount !== null && i.amount !== undefined && i.amount > 0
        )
        .map(i => [
          i.amount
            .toString()
            .split('')
            .reverse()
            .join(''),
          i.name,
          i.dealer
        ]),
      showHead: 'everyPage',
      headStyles: {
        valign: 'middle',
        halign: 'center'
      },
      bodyStyles: {
        valign: 'middle',
        halign: 'center'
      },
      styles: { font: 'MyFont' }
    });

    // var blobPDF = new Blob([doc.output('blob')], { type: 'application/pdf' });
    // let arrayOfBlob = new Array<Blob>();
    // arrayOfBlob.push(blobPDF);
    // let pdftoshare = new File(arrayOfBlob, order.id, {
    //   type: 'application/pdf'
    // });

    // const navigator = window.navigator as any;

    // if (navigator.share) {
    //   navigator
    //     .share({
    //       files: [pdftoshare],
    //       title: 'Dummy text file',
    //       text: 'Some dummy text file'
    //     })
    //     .then(() => console.log('Share was successful.'))
    //     .catch(error => console.log('Sharing failed', error.message));
    // }

    doc.save(order.id + '.pdf');
  }
}
