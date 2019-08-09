import React, { useEffect } from 'react';
import styles from './PDFViewer.module.scss';

const PDFViewer = ({handler, src}) => {
    const viewRef = React.createRef();

    useEffect(() => {
        const pdf = new handler(viewRef.current, src);
        pdf.init();
    }, []);

    return (
        <div ref={viewRef} id="pdf-viewer" className={styles.pdfWrapper}>
        </div>
    )
}

export default PDFViewer;