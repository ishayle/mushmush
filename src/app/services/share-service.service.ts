import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import pdfmake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfmake.vfs = pdfFonts.pdfMake.vfs;
pdfmake.fonts = {
  DroidKufi: {
    normal:  addr+'/fonts/DroidKufi/DroidKufi-Regular.ttf',
    bold: addr+'/fonts/DroidKufi/DroidKufi-Bold.ttf',
    italics: addr+'/fonts/DroidKufi/DroidKufi-Regular.ttf',
    bolditalics: addr+'/fonts/DroidKufi/DroidKufi-Regular.ttf',
  }
  ]
@Injectable()
export class ShareService {
  constructor() {}

  shareOrder(order: Order) {
    // const doc = new jsPDF();
    // doc.addFileToVFS('IBMPlexSans-Bold.ttf', fonts.base64font);
    // doc.addFont('IBMPlexSans-Bold.ttf', 'PlexBold', 'normal');
    // doc.setFont('PlexBold');
    // doc.autoTable(
    //   ['פריט', 'כמות', 'ספק'],
    //   order.items.map(i => [i.name, i.amount, i.dealer])
    // );
    // doc.save('table.pdf');

    var dd = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],

            body: [
              [
                { text: 'First', bold: true },
                { text: 'Second', bold: true },
                { text: 'Third', bold: true },
                { text: 'The last one', bold: true }
              ],
              ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
              ['Val 2', 'שדגכשדגכ 2', 'Val 3', 'Val 4']
            ]
          }
        }
      ]
    };

    const documentDefinition = {
      content: 'This is an sample PDF printed with pdfMake'
    };
    pdfmake.createPdf(dd).download();
  }
}
