class PDF
{
    constructor(element, source)
    {
        const iframe = document.createElement('iframe');

        iframe.src = `/vendor/pdfjs/web/viewer.html?file=${source}`;
        iframe.width = '100%';
        iframe.height = '100%';

        element.appendChild(iframe);
    }

    init()
    {

    }
}

export default PDF;