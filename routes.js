const router = require('express').Router()

/** Note: Saya masih binggung buat export dan import html tagnya kak
 *  karna halaman express ini tidak memakai index.html,
 *  Jadi saya bikin inline untuk sementara
 **/

router.get('/', (req, res) => {
  res.send(`
    <div style="text-align: center">
      <h1>Home</h1>
      <a href="/users">Go to Users</a>
    </div>`
  )
})

router.get('/users', (req, res) => {
  res.send(`
    <div style="text-align: center">
      <h1>Users</h1>
      <ul style="padding: 0">
        <li>
          <a href="/users/userA?id=1&name=Alpha">
            User A
          </a>
        </li>
        <li>
          <a href="/users/userB?id=2&name=Bravo">
            User B
          </a>
        </li>
        <li>
          <a href="/users/userC?id=3&name=Charlie">
            User C
          </a>
        </li>
      </ul>
      <button type="button"><a href="/">Back</a></button>
    </div>`
  )
})

router.get('/users/:usrname', (req, res) => {
  const {id, name} = req.query
  const {usrname} = req.params
  res.json({id, usrname, name})
})

module.exports = router