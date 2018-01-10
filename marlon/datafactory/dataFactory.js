app.factory('sidebarMenu', function($http){
  return [
    {id:0,title:'Home',route:'home',icon:'fa-home',sub:false},
    {id:1,title:'Manage Club',route:'manage-club',icon:'fa-edit',sub:true},
    {id:2,title:'Manage Members',route:'manage-members',icon:'fa-desktop',sub:false},
    {id:3,title:'SportsPass Tile',route:'sportspass-tile',icon:'fa-table',sub:true}
  ];
});

app.factory('sidebarSubmenu', function($http){
  return [
    {id:0,menuId:3,title:'Tile Categories',route:'tile-cat'},
    {id:1,menuId:3,title:'Tiles',route:'tile-man'}
  ];
});
