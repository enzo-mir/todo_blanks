import Route from "@ioc:Adonis/Core/Route";
import Database from "@ioc:Adonis/Lucid/Database";
interface Data {
    id: number;
    title: string;
    desc: string;
    status: string;
  }

Route.post("/todos", async () => {
  let data = await Database.from("todo_blanks").select("*");
  return data;
});

Route.post("/postStatus", async (ctx) => {
  let body = ctx.request.body();
  let oldData: Data = body.data;

  if (oldData.status == body.currentStatus) {
    return ctx.response.status(201);
  } else {
    await Database.rawQuery(
      `UPDATE todo_blanks SET status = ${body.currentStatus} WHERE id  = ${oldData.id}`
    );
    return ctx.response.status(200);
  }
});

Route.post("/addTodo", async (ctx) => {
  let body: Record<string, string> = ctx.request.body();

  let getSameTitle = await Database.from("todo_blanks")
    .select("*")
    .where("title", body.title);

  if (!getSameTitle.length) {
    let insertionTodo = await Database.table("todo_blanks").insert({
      title: body.title,
      description: body.desc,
      status: 0,
    });

    if (insertionTodo) {
      ctx.response.status(200);
      ctx.response.json({ message: null });
    } else {
      ctx.response.status(501);
    }
  } else {
    ctx.response.json({ message: "Le titre doit être différent" });
  }
});
Route.post("/deleteTodo", async (ctx) => {
  let { id } = ctx.request.body();
  let deletePost = await Database.from("todo_blanks")
    .delete("*")
    .where("id", id);

  if (deletePost) ctx.response.status(200);
});
