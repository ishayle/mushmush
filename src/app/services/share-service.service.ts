import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Injectable()
export class ShareService {
  constructor() {}

  shareOrder(order: Order) {
    const doc = new jsPDF();
    doc.autoTable(
      ['פריט', 'כמות', 'ספק'],
      order.items.map(i => [i.name, i.amount, i.dealer])
    );
    doc.save('table.pdf');
  }
}
