        const startDate = new Date("2024-10-18T00:00:00");

        function updateLoveTimer() {
            const now = new Date();
            let years = now.getFullYear() - startDate.getFullYear();
            let months = now.getMonth() - startDate.getMonth();
            let days = now.getDate() - startDate.getDate();
            let hours = now.getHours() - startDate.getHours();
            let minutes = now.getMinutes() - startDate.getMinutes();
            let seconds = now.getSeconds() - startDate.getSeconds();

            if (seconds < 0) { seconds += 60; minutes--; }
            if (minutes < 0) { minutes += 60; hours--; }
            if (hours < 0) { hours += 24; days--; }
            if (days < 0) {
                const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += lastMonth.getDate();
                months--;
            }
            if (months < 0) { months += 12; years--; }

            const display = `
                <span>${years} ano${years !== 1 ? 's' : ''}</span>,
                <span>${months} mês${months !== 1 ? 'es' : ''}</span>,
                <span>${days} dia${days !== 1 ? 's' : ''}</span>,
                <span>${hours.toString().padStart(2, '0')}h</span> :
                <span>${minutes.toString().padStart(2, '0')}m</span> :
                <span>${seconds.toString().padStart(2, '0')}s</span>
            `;

            document.getElementById("love-timer").innerHTML = display;
        }

        setInterval(updateLoveTimer, 1000);
        updateLoveTimer();

        function mostrarAba(id) {
            document.querySelectorAll('.aba').forEach(aba => {
                aba.classList.remove('ativa');
            });
            document.getElementById(id).classList.add('ativa');
        }

        function criarCoracoes() {
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.animationDuration = (Math.random() * 3 + 5) + "s";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 8000);
        }

        setInterval(criarCoracoes, 500);