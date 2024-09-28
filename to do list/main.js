const container = document.querySelector('.container');
const content = document.querySelector('.content');

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('tombol')) {
        const note = document.getElementById('note').value; 
        form = document.getElementById('form');

        if(note === ''){
            alert('masukkan input yang sesuai');
        }else if(note.length > 40){
            alert('input tidak boleh lebih dari 40 karakter');
        }else{
            tambahElemen();
            console.log(e);
        }
        form.reset();
    }
})

function tambahElemen(){
    const list = document.createElement('div');
    list.id = 'list';
    const done = document.createElement('input');
    done.type = 'checkbox';
    const close = document.createElement('div');

    close.classList.add('close');
    list.classList.add('list');
    done.classList.add('done');

    close.innerHTML = '<p>X<p>';
    const note = document.getElementById('note').value;
        const isi = document.createTextNode(note);
        list.appendChild(done);
        list.appendChild(isi);
        list.appendChild(close);
        container.appendChild(list);
        
        close.addEventListener('click',function(){
                list.remove();   
        })
}
