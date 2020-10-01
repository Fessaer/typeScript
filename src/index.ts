function fn() {
    throw new Error('Ts error')
}
fn();

function sleep(ms:number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

async function* getItemsReallySlowly<T> (items: Iterable<T>): AsyncIterableIterator<T> {
    for (const item of items) {
        await sleep(1000);
        yield item;
    }
}
    
async function speackLikeSloth(items: string[]) {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item)
    }
    
}

speackLikeSloth(['hi', 'all', 'TS', 'Awesome']);