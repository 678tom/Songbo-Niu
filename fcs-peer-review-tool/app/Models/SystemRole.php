<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class SystemRole extends Model
{
    use HasFactory, Notifiable;
    protected $table = 'system_roles';


    protected $fillable = [
        'role',
    ];
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_system_role', 'system_roles_id', 'users_id');
    }
    public static function find($id)
    {
        $role = SystemRole::all()->where('id', $id)->first();
        return $role;
    }
}
