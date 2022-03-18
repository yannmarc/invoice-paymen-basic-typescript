export class ListTemplate {
    constructor(list) {
        this.list = list;
    }
    render(type, heading, position) {
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        h4.innerHTML = heading;
        p.innerHTML = type.format();
        li.append(h4);
        li.append(p);
        if (position == 'start') {
            this.list.prepend(li);
        }
        else {
            this.list.append(li);
        }
    }
}
