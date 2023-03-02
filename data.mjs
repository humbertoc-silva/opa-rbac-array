import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

try {
    const tuples = [];
    let user;
    let xj = 0;
    let xk = 0;
    for (let i = 0; i < 5; i++) {
        user = `user_${i}`;
        let role;
        let endj = xj + 10;
        for (let j = xj; j < endj; j++, xj++) {
            role = `role_${j}`;
            let permission;
            let endk = xk + 10;
            for (let k = xk; k < endk; k++, xk++) {
                permission = `permission_${k}`;
                tuples.push([user, role, permission]);
            }
        }
    }

    const result = {rbac: {tuples}}
    const data = new Uint8Array(Buffer.from(JSON.stringify(result)));
    const promise = writeFile('data.json', data);
    await promise
} catch (err) {
    console.error(err);
}


