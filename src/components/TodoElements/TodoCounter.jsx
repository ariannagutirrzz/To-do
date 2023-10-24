function TodoCounter(total,completed) {
    return (
        <h1>
            {completed == total ? 'congrats! you finished all your todos' : `You completed ${completed} of ${total} todo's`}
        </h1>
    )
}

export { TodoCounter }