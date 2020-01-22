'use strict';


function renderBoard() {
        let board = "";
        let color_1 = "white";
        let color_2 = "black";
        let arrABC = ['A','B', 'C', 'D', 'I', 'F', 'G', 'H'];
        let figure_1 = ['П', 'П', 'П', 'П', 'П', 'П', 'П', 'П'];
        let figure_2 = [ 'Л','К','С','Кр','Ф','С','К','Л'];
    
        for (let y = 0; y < 10; y++) {
                board += "<tr>";
            for (let x = 0; x < 10; x++) {
                if (y==0 || x==0 || x==9 || y==9) {
                    board += `<td data-x="${x}" data-y="${y}" class="field"></td>`;
                    if (x==9) { [color_1, color_2]=[color_2, color_1]};
                } else { 
                    if (x%2==0){
                        if (y==8 && x>0 && x<9){
                            board += `<td data-x="${x}" data-y="${y}" class="${color_1} color_b">${figure_2[x-1]}</td>`;
                        } else if (y==1 && x>0 && x<9){
                            board += `<td data-x="${x}" data-y="${y}" class="${color_1} color_w">${figure_2[x-1]}</td>`;
                        } else if (y==2 && x>0 && x<9){
                            board += `<td data-x="${x}" data-y="${y}" class="${color_1} color_w">${figure_1[x-1]}</td>`;
                        } else {
                            if (y==7 && x>0 && x<9){
                            board += `<td data-x="${x}" data-y="${y}" class="${color_1} color_b">${figure_1[x-1]}</td>`;
                        } else {
                            board += `<td data-x="${x}" data-y="${y}" class="${color_1}"></td>`;
                            }
                        }
                    } else {
                        if (y==8 && x>0 && x<9){
                            board += `<td data-x="${x}" data-y="${y}" class="${color_2} color_b">${figure_2[x-1]}</td>`;
                        } else if (y==1 && x>0 && x<9){
                            board += `<td data-x="${x}" data-y="${y}" class="${color_2} color_w">${figure_2[x-1]}</td>`;
                        } else if (y==2 && x>0 && x<9){
                            board += `<td data-x="${x}" data-y="${y}" class="${color_2} color_w">${figure_1[x-1]}</td>`;
                        } else {
                            if (y==7 && x>0 && x<9){
                            board += `<td data-x="${x}" data-y="${y}" class="${color_2} color_b">${figure_1[x-1]}</td>`;
                        } else {
                            board += `<td data-x="${x}" data-y="${y}" class="${color_2}"></td>`;
                            }
                        }
                    }
                }
            }
            board += "</tr>";
        }
    
        let result = `<table><tbody>${board}</tbody></table>`;
        document.body.insertAdjacentHTML("afterbegin", result);
        
        let desc_top = document.querySelectorAll('[data-y="0"]');
        let desc_bottom = document.querySelectorAll('[data-y="9"]');
        let desc_left = document.querySelectorAll('[data-x="0"]');
        let desc_right = document.querySelectorAll('[data-x="9"]');
        
    
    for (let n = 1; n < desc_top.length-1; n++){
        desc_top[n].innerText=`${arrABC[n-1]}`;
        desc_bottom[n].innerText=`${arrABC[n-1]}`;
    }
    
    for (let n = 1 ; n < desc_left.length-1; n++){
        desc_left[n].innerText=`${desc_left.length-n-1}`;
        desc_right[n].innerText=`${desc_left.length-n-1}`;
    }

}

renderBoard();