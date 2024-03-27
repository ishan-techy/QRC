
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useState, useEffect } from 'react'
function Scanner() {
    const [scanResult, setScanResult] = useState(null);
    useEffect(() => {
        const scanner = new Html5QrcodeScanner('render', {
            qrbox: {
                width: '100%',
                height: '100%'
            },
            fps: 5,
        });
        scanner.render(success, error);
        function success(result) {
            scanner.clear();
            setScanResult(result);

        }
        function error(err) {
            console.warn(err);

        }

    }, []);

    return (<div>
        {scanResult
            ? <div> success:{scanResult}</div>
            : <div id="render">not found</div>
        }

    </div>
    )
}
export default Scanner;