class InvoiceBad {
  sendToClient() {
    console.log('SEND')
  }
}

class ReceiptBad {
  archive() {
    console.log('ARCHIVE')
  }
}

class MemoBad {
  markAsRead() {
    console.log('MARK AS READ')
  }
}

// Bad implementation
class DocProcessorBad {
  processDocs(docs: Array<any>) {
    docs.forEach(doc => {
      if (doc instanceof InvoiceBad) {
        doc.sendToClient()
      } else if (doc instanceof ReceiptBad) {
        doc.archive()
      } else if (doc instanceof MemoBad) {
        doc.markAsRead()
      }
    })
  }
}

class Invoice {
  process() {
    console.log('SEND')
  }
}

class Receipt {
  process() {
    console.log('ARCHIVE')
  }
}

class Memo {
  process() {
    console.log('MARK AS READ')
  }
}

interface Doc {
  process(): void
}

class DocProcessor {
  processDocs(docs: Array<Doc>) {
    docs.forEach(doc => {
      doc.process()
    })
  }
}
