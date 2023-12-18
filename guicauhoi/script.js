const submitQuestion = document.querySelector(".submitQuestion");
        const listQuestions = localStorage.getItem("list-question") ? JSON.parse(localStorage.getItem("list-question")) : [];

        function resetInput() {
            document.getElementById("question").value = "";
            document.getElementById("keyA").value = "";
            document.getElementById("keyB").value = "";
            document.getElementById("keyC").value = "";
            document.getElementById("keyD").value = "";
            document.getElementById("trueKey").value = "";
        }

        function updateTime() {
            var timeSubmitQuestion = new Date();
            var time = timeSubmitQuestion.toLocaleString();
            setTimeout(updateTime, 1000)
            return time;
        }


        submitQuestion.addEventListener("click", function() {
            const activeUser = JSON.parse(localStorage.getItem("activeUser"));
            let question = document.getElementById("question").value;
            let keyA = document.getElementById("keyA").value;
            let keyB = document.getElementById("keyB").value;
            let keyC = document.getElementById("keyC").value;
            let keyD = document.getElementById("keyD").value;
            let trueKey = document.getElementById("trueKey").value;
            let realTime = updateTime();
            let username = activeUser.username;
            listQuestions.push({
                time: realTime,
                question: question,
                keyA: keyA,
                keyB: keyB,
                keyC: keyC,
                keyD: keyD,
                trueKey: trueKey, 
                status: "Chờ duyệt",
                username,
            });
            localStorage.setItem("list-question", JSON.stringify(listQuestions));
            renderQuestion();
            resetInput();
        })

        function renderQuestion() {
            let questions = `<tr>
                <th>STT</th>
                <th>Thời gian</th>
                <th>Câu hỏi</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
                <th>Đáp án đúng</th>
                <th>Trạng thái</th>
                <th>EDIT</th>

            </tr>`
            listQuestions.map((value, index) => {
                questions += `<tr>
                    <td>${index + 1}</td>
                    <td>${value.time}</td>
                    <td>${value.question}</td>
                    <td>${value.keyA}</td>
                    <td>${value.keyB}</td>
                    <td>${value.keyC}</td>
                    <td>${value.keyD}</td>
                    <td>${value.trueKey}</td>
                    <td>${value.status}</td>
                    <td>
                        <button onclick="editQuestion(${index})">Sửa</button>
                        <button onclick="deleteQuestion(${index})">Xóa</button>
                    </td>
                </tr>`
            })
            document.getElementById("tableContent").innerHTML = questions;
        }
        function editQuestion(index) {
            document.getElementById("question").value = listQuestions[index].question;
            document.getElementById("keyA").value = listQuestions[index].keyA;
            document.getElementById("keyB").value = listQuestions[index].keyB;
            document.getElementById("keyC").value = listQuestions[index].keyC;
            document.getElementById("keyD").value = listQuestions[index].keyD;
            document.getElementById("trueKey").value = listQuestions[index].trueKey;
            document.getElementById("index").value = index;

            submitQuestion.style.display = "none";
            document.getElementById("update").style.display = "inline-block";
        }

        function deleteQuestion(index) {
            listQuestions.splice(index, 1);
            localStorage.setItem("list-question", JSON.stringify(listQuestions));
            renderQuestion();
        }

        document.getElementById("update").addEventListener("click", function() {
            var index = document.getElementById("index").value;
            var realTime = updateTime();
            listQuestions[index] = {
                ...listQuestions[index],
                time: realTime,
                question: document.getElementById("question").value,
                keyA: document.getElementById("keyA").value,
                keyB: document.getElementById("keyB").value,
                keyC: document.getElementById("keyC").value,
                keyD: document.getElementById("keyD").value,
                trueKey: document.getElementById("trueKey").value
            }
            localStorage.setItem("list-question", JSON.stringify(listQuestions));
            renderQuestion();

            submitQuestion.style.display = "inline-block";
            document.getElementById("update").style.display = "none";
            resetInput();
        })
function submitForm(event){
    event.preventDefault();
}