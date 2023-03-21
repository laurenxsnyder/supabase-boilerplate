import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://dfbjbyjzsfrypaymxtau.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmYmpieWp6c2ZyeXBheW14dGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4MjU0NjcsImV4cCI6MTk5NDQwMTQ2N30.YopGD6EjkM7QL8kgYe4H98geE2YjFztiTj65MhpQ3Dc'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML+=`<tr><td>${book.title}</td><td>${book.Author}</td><td>${book.isbn}</td><td>${book.description}</td></tr>`;
}
}

getBooks();