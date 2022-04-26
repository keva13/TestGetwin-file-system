
export function getFolders() {
    
    return fetch("https://prof.world/api/test_json_files/?token=6a06cc0050374e32be51125978904bd8")
      .then(res => res.json())
}