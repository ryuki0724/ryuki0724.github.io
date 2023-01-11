function sendData() {
            var val = document.getElementById('pass_lock').value;
            // var pass = {
            //     password: val
            // }
            document.getElementById('pass_lock').value = '';
            

            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://ryuki0724.github.io/', true);
            xhr.setRequestHeader('Content-type', 'text/plain');
            xhr.send(val);
            console.log(val);
        }
