window.onload = () => {
    const EXCUSE_PARTS = {
        who: ['The dog', 'My grandma', 'The mailman', 'My bird', 'A ghost'],
        action: ['ate', 'peed', 'crushed', 'broke', 'stole'],
        what: ['my homework', 'my phone', 'the car', 'my dignity'],
        when: ['before class', 'while sleeping', 'during lunch', 'while praying']
    };
    const SUBJECT_IMAGES = {
        'The dog': 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=100',
        'My grandma': 'https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg?auto=compress&cs=tinysrgb&w=100',
        'The mailman': 'https://plus.unsplash.com/premium_photo-1664392140489-22b9ec737ffc?q=80&w=492&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'My bird': 'https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=100',
        'A ghost': 'https://images.pexels.com/photos/5435307/pexels-photo-5435307.jpeg?auto=compress&cs=tinysrgb&w=100'
    };

    const btn = document.getElementById('excuse-btn');
    const list = document.getElementById('excuse-list');

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const handleNewExcuse = () => {
        
       let excuseData = {}; 
        
        for (let key in EXCUSE_PARTS) {
            excuseData[key] = getRandom(EXCUSE_PARTS[key]);
        };

        const { who: subject, action, what, when } = excuseData;

        const excuseText = `${subject} ${action} ${what} ${when}.`;
        
       
        const avatar = SUBJECT_IMAGES[subject];

        const li = document.createElement('li');
        li.className = "list-group-item list-group-item-action d-flex align-items-center animate__animated animate__backInDown";
        
        li.innerHTML = `
            <img src="${avatar}" class="rounded-circle me-3 border shadow-sm" style="width: 50px; height: 50px; object-fit: cover;" 
                 alt="${subject}" onerror="this.src='https://ui-avatars.com/api/?name=X&background=random'">
            <div class="flex-grow-1">
                <p class="mb-0 fw-semibold text-dark">${excuseText}</p>
                <small class="text-muted" style="font-size: 0.7rem;">Persona involucrada: ${subject}</small>
            </div>
            <span class="badge bg-light text-primary border shadow-sm px-2">New</span>
        `;

        list.prepend(li);
    };

    if (btn) {
        btn.addEventListener('click', handleNewExcuse);
    }
    
    handleNewExcuse();
    console.log("✅ Generador con imágenes temáticas listo.");
};