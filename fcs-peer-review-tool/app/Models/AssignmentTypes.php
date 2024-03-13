<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssignmentTypes extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
    ];

    public static function find($id)
    {
        return AssignmentTypes::all()->where('id', $id)->first();
    }

    //Relationships

    //Relationship with the assignments using the table assignments_types
    public function assignments()
    {
        return $this->belongsToMany(Assignments::class, 'assignments_types', 'assignment_type_id', 'assignments_id');
    }

}
