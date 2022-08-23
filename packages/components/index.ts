import hookType, { hookLane } from "@swift/hooks";

const hooks = {
    name: 'hook'
}

const man = {
    name: 'xiaoming',
    age: 12,
}

console.info(hookType, hookLane, man)

export default hooks