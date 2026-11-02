import jwt from 'jsonwebtoken';
export function optionalAuth(req,_res,next){const header=req.get('authorization');if(header?.startsWith('Bearer ')){try{req.user={id:jwt.verify(header.slice(7),process.env.JWT_SECRET).sub};}catch{}}req.guestId=req.get('x-guest-id')||null;next();}
export function requireAuth(req,res,next){if(!req.user)return res.status(401).json({success:false,message:'Please sign in to continue.'});next();}
export function canAccess(doc,req){if(!doc)return false;if(req.user)return String(doc.userId)===String(req.user.id);return Boolean(req.guestId&&doc.guestId===req.guestId);}
