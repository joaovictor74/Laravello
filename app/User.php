<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;
    
    protected $fillable = [
        'name', 'email', 'password',
    ];
   
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
   
    public function boards(): HasMany
    {
        return $this->hasMany(User::class, 'owner_id');
    }

    public function cards(): HasMany
    {
        return $this->hasMany(Card::class, 'owner_id');
    }
}
