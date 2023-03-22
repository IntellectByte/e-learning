import React, {Component} from "react";

function UploadChunkVideoForm({courseId}) {

    // Set your cloud name and unsigned upload preset here:
    var YOUR_CLOUD_NAME = process.env.CLOUD_NAME;
    var YOUR_UNSIGNED_UPLOAD_PRESET = process.env.UPLOAD_PRESETS;

    var POST_URL = process.env.CLOUDINARY_VIDEO_URL


    const processFile = async (e) => {
        var file = e.target.files[0];


        var XUniqueUploadId = +new Date();

        processFile();

        function processFile(e) {
            var size = file.size;
            var sliceSize = 99999999;
            var start = 0;

            setTimeout(loop, 3);

            function loop() {
                var end = start + sliceSize;

                if (end > size) {
                    end = size;
                }
                var s = slice(file, start, end);
                send(s, start, end - 1, size);
                if (end < size) {
                    start += sliceSize;
                    setTimeout(loop, 3);
                }
            }
        }

        function send(piece, start, end, size) {
            console.log("start ", start);
            console.log("end", end);

            var formdata = new FormData();
            console.log(XUniqueUploadId);

            formdata.append("file", piece);
            formdata.append("cloud_name", YOUR_CLOUD_NAME);
            formdata.append("upload_preset", YOUR_UNSIGNED_UPLOAD_PRESET);
            formdata.append("public_id", "myChunkedFile2");

            var xhr = new XMLHttpRequest();
            xhr.open("POST", POST_URL, false);
            xhr.setRequestHeader("X-Unique-Upload-Id", XUniqueUploadId);
            xhr.setRequestHeader(
                "Content-Range",
                "bytes " + start + "-" + end + "/" + size
            );

            xhr.onload = function () {
                // do something to response

                //USAR ESTE this.responseText PARA CREAR UN REACT STATE
                //ADENTRO DEL RESPONSE SE ENCUENTRA LA URL CUANDO SE TERMINA DE
                //SUBIR EL VIDEO
                console.log(this.responseText, "RES");
            };

            xhr.send(formdata);

        }

        function slice(file, start, end) {
            var slice = file.mozSlice
                ? file.mozSlice
                : file.webkitSlice
                    ? file.webkitSlice
                    : file.slice
                        ? file.slice
                        : noop;

            return slice.bind(file)(start, end);
        }

        function noop() {
        }
    };

    return (
        <div>
            <h3>Upload:</h3>
            <h5>Test image/video upload</h5>
            <input type="file" onChange={processFile}/>
        </div>
    );
}

export default UploadChunkVideoForm;
