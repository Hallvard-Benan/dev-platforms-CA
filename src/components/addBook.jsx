function AddBook({ handleSubmitBook }) {
  return (
    <form onSubmit={handleSubmitBook} className="grid gap-2">
      <div>
        <label htmlFor="title">title</label>
        <input
          name="title"
          type="text"
          placeholder="title"
          className="border-2"
        />
      </div>
      <div>
        <label htmlFor="author">author</label>
        <input
          name="author"
          type="text"
          placeholder="author"
          className="border-2"
        />
      </div>

      <div>
        <label htmlFor="pages">pages</label>
        <input name="pages" type="number" placeholder="" className="border-2" />
      </div>

      <div>
        <label htmlFor="finished">Finished?</label>
        <input name="finished" type="checkbox" />
      </div>
      <button className="border-2" type="submit">
        submit
      </button>
    </form>
  );
}

export default AddBook;
