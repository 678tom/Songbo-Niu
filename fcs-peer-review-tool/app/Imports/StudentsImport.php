<?php

namespace App\Imports;

use App\Models\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToCollection;

class StudentsImport implements ToCollection
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        $users = collect();

        foreach ($rows as $row)
        {
            $user = User::findByBannerId($row[2]);

            if(!$user){
                $user = new User();
                $user->first_name = $row[0];
                $user->last_name = $row[1];
                $user->banner_id = $row[2];
                $user->email = $row[3];
                $user->password = Hash::make("default");

            }
            try {
                $user->save();
            }
            catch (\Exception $e){
               Log::error('Error Creating User', $e->getMessage());
            }
            $users->push($user);
        }
        return $users;
    }

}
