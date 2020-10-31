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

interface IDoc {
  process(): void
}

interface IDocProcessor {
  processDocs(docs: Array<IDoc>): void
}

class Invoice implements IDoc {
  process() {
    console.log('SEND')
  }
}

class Receipt implements IDoc {
  process() {
    console.log('ARCHIVE')
  }
}

class Memo implements IDoc {
  process() {
    console.log('MARK AS READ')
  }
}

class DocProcessor implements IDocProcessor {
  processDocs(docs: Array<IDoc>) {
    docs.forEach(doc => {
      doc.process()
    })
  }
}
