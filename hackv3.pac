// =======================
// CUSTOM AIM & GRIP CONFIG
// =======================
// =======================
// ADVANCED AIM CONFIG
// =======================
var AdvancedAimConfig = {
    PrecisionHeadshot_Lock: 999,                // khóa chính xác vào đầu
    RealTimeTarget_Tracking: 999,               // theo dõi mục tiêu real-time
    DynamicAimAssist_Scaling: 999,              // tự động điều chỉnh aim assist
    AdvancedHeadFocus_Mode: 999,                // tập trung vào đầu nâng cao
    InteractiveAim_Feedback: 999,               // phản hồi tương tác aim
    CustomizableAim_Zones: 999,                 // các vùng aim tùy chỉnh
    RealTimeAim_Correction: 999,                // hiệu chỉnh aim real-time
    AutoTarget_SnapSpeed: 999,                  // tốc độ snap tự động
    DynamicRecoil_OffsetControl: 999,           // điều chỉnh recoil động
    QuickAim_ResetOptions: 999,                 // reset aim nhanh
    // =======================
    // BỔ SUNG TÍNH NĂNG MỚI
    // =======================
    HeadTracking_Stability: 999,                // ổn định theo dõi đầu
    AimSensitivity_AutoTune: 999,               // tự tune độ nhạy aim
    PredictiveTarget_Compensation: 999,         // bù trừ dự đoán target
    MicroAdjust_Stabilizer: 999,                // điều chỉnh nhỏ mượt mà
    SmartSnap_Optimization: 999,                // tối ưu snap thông minh
    MultiZone_ForceScaling: 999                 // scaling lực aim theo vùng
};
var CustomAimConfig = {
    CustomizableAim_GripLevel: 999,                // tăng cao từ 1 lên max
    AutoDrag_RepositionSystem: 999,                // tự động kéo & định vị
    RealTimeGrip_PressureMod: 999,                // điều chỉnh lực kẹp real-time
    AdvancedGrip_Balance: 999,                     // cân bằng nâng cao
    FingerMotion_Assist: 999,                      // hỗ trợ chuyển động ngón tay
    DynamicTouch_DriftPrevention: 999,            // chống trôi cảm ứng
    FastGrip_ResetToggle: 999,                     // reset nhanh lực kẹp
    PrecisionControl_Override: 999,               // override kiểm soát chính xác
    DragStability_SyncSystem: 999,                // đồng bộ ổn định drag
    QuickGrip_ResetOptions: 999,                   // các tùy chọn reset nhanh
    // =======================
    // BỔ SUNG TÍNH NĂNG MỚI
    // =======================
    MultiFinger_AdaptiveForce: 999,               // lực tùy biến theo ngón tay
    AutoStabilize_HandTracking: 999,              // ổn định theo tay
    MicroDrag_Smoothing: 999,                     // mượt hóa drag nhỏ
    GripHeat_ResponseMod: 999,                     // phản hồi nhiệt độ
    HapticFeedback_Intensity: 999,                // cường độ phản hồi rung
    AntiSlip_Adjustment: 999,                     // chống trượt khi bấm
    TurboGrip_Mode: 999,                           // chế độ grip cực nhanh
    SmartPressure_Calibration: 999,               // tự động hiệu chỉnh lực
    TouchZone_Expansion: 999,                      // mở rộng vùng cảm ứng
    ReactionTime_Optimization: 999                // tối ưu phản ứng nhanh
};
var Basic = {
        WeaponAimYawRate: 99999,
        CrossHairBurstIncreaseSpeed: 99,
        BulletFireSpeed: "AspectRatio_MaintainsYFOV",
        CrossHairInitialSize: 999,
        ReloadTime: "AspectRatio_MaintainsYFOV",
        ShootInterval: "float",
        BulletRangeMax: 9999,
        BurstShootBulletsNum: "AspectRatio_MaintainsYFOV",
        AimAssist: 999.00,
        WeaponAimAssist: 999.00,
        WeaponAimFov: 999.00,
        RadialDamageScale: 9999,
        RadialDamageWeaponScale: 9999,
        Target: "Lock_Head",
        AspectRatioAxisConstraint: "AspectRatio_MaintainYFOV",
  AimAssist: 88.8,
    Aim_Assist: 88.8,
    r_AimAssist: 88.8,
    r_hit: 88.8
};
var SystemAim = {
    WeaponAimYawRate: "AspectRatio_MaintainsYFOV",
    CrossHairBurstIncreaseSpeed: 3.0,
    BulletFireSpeed: "AspectRatio_MaintainsYFOV",
    CrossHairInitialSize: 1,
    ReloadTime: "AspectRatio_MaintainsYFOV",
    ShootInterval: 3.0,
    BulletRange: 3.0,
    BurstShootBulletsNum: "AspectRatio_MaintainsYFOV",
    WeaponAimFOV: 2.0,
    AspectRatioAxisConstraint: "AspectRatio_MaintainYFOV",
    SkeletalMeshLODBias: 10,
    ParticleLODBias: -5
};


// =======================
// SHOOT WEAPON ENTITY
// =======================
var ShootWeaponEntity = {
    GetBurstShootBullets: "AspectRatio_MaintainsYFOV",
    GetBurstShootBulletsNum: "AspectRatio_MaintainsYFOV",
    BurstShootBullets: "AspectRatio_MaintainsYFOV",
    BurstShootBulletsNum: "AspectRatio_MaintainsYFOV",
    BurstShootBulletsNumFromEntity: "AspectRatio_MaintainsYFOV",
    GetBurstShootBulletsNumFromEntity: "AspectRatio_MaintainsYFOV",
    HandleAlShootBulletHit: "AspectRatio_MaintainsYFOV",
    OwnerClient_HandleAlShootBulletHit: "AspectRatio_MaintainsYFOV",
    RPC_OwnerClient_HandleAlShootBulletHit: "AspectRatio_MaintainsYFOV",
    CurBulletNumInClip: "AspectRatio_MaintainsYFOV"
};


// =======================
// AUTO AIMING RANGE CONFIG
// =======================
var AutoAimingRangeConfig = {
    Speed: "999",
    RangeRate: "Max",
    SpeedAim: "Max"
};


// =======================
// EXTERNAL CHARACTER CONFIG
// =======================
var STExtraBaseCharacter = {
    UseShootVerifyEx: true,
    ClientHitPartJudgment: 255,
    HitPart: 1
};


// =======================
// WEAPON HIT PART CONFIG
// =======================
var WeaponHitPartCoff = {
    Head: "Max",
    Body: "AspectRatio_MaintainsYFOV"
};


// =======================
// PHYSICS SETTINGS
// =======================
var PhysicsSettings = {
    DefaultRecoil: 0,
    DefaultSRecoilInfo: 0,
    DefaultRecoilKickADS: 0,
    DefaultRecoilADSRotation_CP: 0,
    DefaultOpenParachute: 0,
    DefaultHitBoxLeanTransR: 0,
    DefaultSeekAndLockTarget: 5.0,
    DefaultDamageMagnifierIdx: "AspectRatio_MaintainsYFOV",
    DefaultDamageWeapons: "AspectRatio_MaintainsYFOV",
    DefaultMovingSpeedZ: 55,
    DefaultHitEnemy: "AspectRatio_MaintainsYFOV",
    EnableDamageInfo: "AspectRatio_MaintainsYFOV",
    DefaultGravityZ: "AspectRatio_MaintainsYFOV"
};


// =======================
// SECOND SYSTEM AIM OVERRIDE
// =======================
var SystemAim_Override = {
    WeaponAimYawRate: "AspectRatio_MaintainsYFOV",
    CrossHairBurstIncreaseSpeed: 3.0,
    BulletFireSpeed: "AspectRatio_MaintainsYFOV",
    CrossHairInitialSize: 1,
    ReloadTime: "AspectRatio_MaintainsYFOV",
    ShootInterval: 7.0,
    BulletRange: "MAX",
    BurstShootBulletsNum: "AspectRatio_MaintainsYFOV",
    WeaponAimFOV: 2.0,
    AspectRatioAxisConstraint: "AspectRatio_MaintainYFOV",
    SkeletalMeshLODBias: 10,
    ParticleLODBias: -5
};
    // --- GameSetting ---
    var GameSetting = {
        AimAssist: "AspectRatio_MaintainsYFOV",
        WeaponAimAssist: "AspectRatio_MaintainsYFOV",
        WeaponAimFov: "AspectRatio_MaintainsYFOV",
        SingleShotWeaponShootMode: "AspectRatio_MaintainsYFOV",
        ActorAnimationSwitch: false,
        CrossHair: "AspectRatio_MaintainsYFOV",
        LeftHandFire: "AspectRatio_MaintainsYFOV",
        LRShootSniperSwitch: "AspectRatio_MaintainsYFOV",
        GrassHeightScale: 0,
        Fog: 0,
        DefaultTerminalVelocity: 0,
        UseTss: 0
    };

    // --- SystemAim ---
    var SystemAim = {
        WeaponAimYawRate: 99999,
        CrossHairBurstIncreaseSpeed: 9999,
        BulletFireSpeed: "AspectRatio_MaintainsYFOV",
        CrossHairInitialSize: "AspectRatio_MaintainsYFOV",
        ReloadTime: "AspectRatio_MaintainsYFOV",
        ShootInterval: "Float",
        BulletRangeMax: 99999,
        BurstShootBulletsNum: "AspectRatio_MaintainsYFOV",
        AimAssist: "AspectRatio_MaintainsYFOV",
        WeaponAimAssist: "AspectRatio_MaintainsYFOV",
        WeaponAimFOV: "AspectRatio_MaintainsYFOV",
        RadialDamageScale: 99999,
        Target: "Lock_Head",
        LockEnemy: true,
        AspectRatioAxisConstraint: "AspectRatio_MaintainYFOV"
    };

    // --- AttackFlow ---
    var AttackFlow = {
        BulletDamageScale: 99999,
        BulletSpeed: "AspectRatio_MaintainsYFOV",
        BulletCost: "AspectRatio_MaintainsYFOV",
        AutoAimSpeed: "AspectRatio_MaintainsYFOV",
        HitPart: "AspectRatio_MaintainsYFOV",
        AimAssist: "AspectRatio_MaintainsYFOV",
        WeaponAimAssist: "AspectRatio_MaintainsYFOV",
        WeaponAimFov: "AspectRatio_MaintainsYFOV",
        Target: "Lock_Head",
        LockEnemy: true,
        UseTss: 0
    };

    // --- AimFlow ---
    var AimFlow = {
        ShotHitCount: "$Value",
        WeaponAimYawRate: 99999,
        ShotHeadHitCount: "AspectRatio_MaintainsYFOV",
        ShotPersonHitCount: "AspectRatio_MaintainsYFOV",
        ShotPersonKillCount: "AspectRatio_MaintainsYFOV",
        AimAssist: "AspectRatio_MaintainsYFOV",
        WeaponAimAssist: "AspectRatio_MaintainsYFOV",
        WeaponAimFov: "AspectRatio_MaintainsYFOV",
        Target: "Lock_Head",
        LockEnemy: true,
        UseTss: 0
    };

    // --- LocalShootHitData ---
    var LocalShootHitData = {
        BulletDown: "AspectRatio_MaintainsYFOV",
        BulletUp: "AspectRatio_MaintainsYFOV",
        BulletRight: "AspectRatio_MaintainsYFOV",
        BulletLeft: "AspectRatio_MaintainsYFOV",
        ShootInterval: "Float",
        AimAssist: "AspectRatio_MaintainsYFOV",
        WeaponAimAssist: "AspectRatio_MaintainsYFOV",
        WeaponAimFov: "AspectRatio_MaintainsYFOV",
        BulletDamageReduceRatio: "AspectRatio_MaintainsYFOV"
    };

    // --- Simple Head Lock System for PAC ---
    var AdaptiveAimSystem = {
        LockMode: "Head",
        LockEnemy: true,
        AutoAdjustRecoil: true,
        HeadshotBias: 9999,
        NoGravityRange: 9999,
        StickToHead: true,
        AntiDrop: true,
        PredictiveAim: true
    };

    
var AimLockSystem = {

    EnableAimLock: true,            // bật chế độ aimlock
    AimLockFOV: 3.0,                // FOV khóa mục tiêu (càng nhỏ càng chính xác)
    AimPriority: "HEAD",            // HEAD | NECK | CHEST

    // --- Strength ---
    LockStrength: 2.25,             // lực kéo khóa trực tiếp – càng cao càng hút mạnh
    HardLockPower: 2.6,             // hard-lock cực mạnh, sử dụng khi tâm gần đầu
    DragLockForce: 1.85,            // lực kéo mượt nhưng vẫn mạnh

    // --- Snap ---
    SnapEnable: true,
    SnapSpeed: 1.90,                // tốc độ snap vào đầu
    SnapRange: 360.0,                 // tự snap khi lệch ≤ 6°

    // --- Micro Correct ---
    MicroCorrect: true,
    MicroCorrectStrength: 1.35,     // sửa sai nhỏ 1–3px cực nhanh

    // --- Smoothing ---
    SmoothEnable: true,
    SmoothFactor: 0.72,             // giảm rung khi tracking (0.65–0.80)
    VerticalSmoothBoost: 1.35,      // ưu tiên trục dọc để nhảy lên đầu nhanh

    // --- Distance adaptive ---
    DistanceAdaptive: true,
    CloseRangeBoost: 1.40,
    MidRangeBoost: 1.15,
    LongRangeNerf: 0.90,

    // --- Anti Overshoot / Anti Shake ---
    AntiOvershoot: true,
    AntiOvershootFactor: 1.25,       // chống vượt qua đầu khi kéo nhanh

    AntiShake: true,
    AntiShakeMin: 0.0017,
    AntiShakeMax: 0.075,

    // --- Head Tracking Integration ---
    UseHeadFixSystem: true,          // auto hợp nhất với HeadfixSystem
    HeadTrackBias: 1.20,             // ưu tiên head hướng theo xương đầu

    // --- Auto Fire ---
    AutoFire: true,
    AutoFireRange: 3.0,              // chỉ bắn khi rất gần mục tiêu
    AutoFireDelay: 18,               // delay nhỏ để tránh spam

    // --- Logic xử lý chính ---
    applyAimLock: function(target, cameraDir, distance) {

        if (!this.EnableAimLock || !target) return cameraDir;

        let aimVector = target.sub(cameraDir);

        // ⭐ Ưu tiên headbone
        if (this.AimPriority === "HEAD" && this.UseHeadFixSystem && target.head) {
            aimVector = target.head.sub(cameraDir).mul(this.HeadTrackBias);
        }

        // ⭐ Distance Adaptive
        if (this.DistanceAdaptive) {
            if (distance < 15) aimVector = aimVector.mul(this.CloseRangeBoost);
            else if (distance < 40) aimVector = aimVector.mul(this.MidRangeBoost);
            else aimVector = aimVector.mul(this.LongRangeNerf);
        }

        // ⭐ Micro Correct
        if (this.MicroCorrect) {
            aimVector = aimVector.mul(this.MicroCorrectStrength);
        }

        // ⭐ Snap Aim
        if (this.SnapEnable) {
            const angle = aimVector.angle();
            if (angle <= this.SnapRange) {
                aimVector = aimVector.mul(this.SnapSpeed);
            }
        }

        // ⭐ Hard Lock khi rất gần đầu
        if (aimVector.length() < 0.022) {
            aimVector = aimVector.mul(this.HardLockPower);
        }

        // ⭐ Smooth Aim
        if (this.SmoothEnable) {
            aimVector.x *= this.SmoothFactor;
            aimVector.y *= this.SmoothFactor * this.VerticalSmoothBoost;
        }

        // ⭐ Anti Overshoot
        if (this.AntiOvershoot) {
            aimVector.x = Math.min(aimVector.x, this.AntiOvershootFactor);
            aimVector.y = Math.min(aimVector.y, this.AntiOvershootFactor);
        }

        // ⭐ Anti Shake
        aimVector.x = Math.max(Math.min(aimVector.x, this.AntiShakeMax), -this.AntiShakeMax);
        aimVector.y = Math.max(Math.min(aimVector.y, this.AntiShakeMax), -this.AntiShakeMax);

        return aimVector;
    }
};

var SteadyHoldSystem = {
    Enabled: true,
    SteadyHold: true,
    SteadyStrength: 1.5,
    HoldFriction: 0.95,
    HoldMemory: 4.0,
    StabilizationTime: 60,

    AntiShake: true,
    ShakeReduction: 0.95,
    MicroShakeFilter: 0.008,
    TapJitterDamping: 0.95,

    DragHoldAssist: true,
    DragLineLock: 1.0,
    DragDirectionStabilizer: 0.9,
    DragReleaseRecovery: 0.9,

    HeadHoldAssist: true,
    HeadPullStrength: 1.0,
    HeadToleranceAngle: 999.0,

    AntiBounce: true,
    BounceDamping: 1.0,
    BounceThreshold: 0.03,

    TouchSmoothing: true,
    TouchSmoothStrength: 1.0,
    AccelDamping: 0.95,
    StabilizedDragRatio: 0.03,

    VelocityAware: true,
    EnemyVelocityImpact: 1.0,
    DragVelocitySync: 0.9,

    CameraSteady: true,
    PitchStabilizer: 0.8,
    YawStabilizer: 0.8,
    TiltStabilizer: 0.7
};

var DriftFixSystem = {
    Enabled: true,
    DriftNeutralizer: true,
    DriftStrength: 1.5,
    DriftMemory: 1.0,
    DriftDecay: 0.95,

    AntiOffsetSystem: true,
    OffsetCorrectionSpeed: 1.0,
    OffsetMaxAngle: 999.0,
    HeadTargetOffset: { x: 0.0, y: 0.014, z: 0.0 },

    AntiTilt: 1.0,
    AntiSlide: 1.0,
    AntiVerticalDrift: 1.0,

    MicroStability: true,
    MicroDampingStrength: 1.0,
    NoiseFloor: 0.01,
    AntiShakeImpulse: 0.1,

    DragDriftFix: true,
    DragHoldStrength: 1.0,
    DragRealignment: 0.95,
    DragPredictiveComp: 0.85,

    LongTermCorrection: true,
    LongTermPullback: 1.0,
    LongTermJitterFilter: 1.0,
    LongTermMaxDrift: 0.03,

    VelocityAwareFix: true,
    EnemyVelocityImpact: 1.0,
    SmoothVelocityBlend: 0.95,

    RotationAware: true,
    PitchCompensation: 0.95,
    YawCompensation: 0.95,
    RollCompensation: 0.95,

    SnapBackFix: true,
    SnapBackStrength: 1.0,
    SnapBackWindow: 120,
    SnapBackThreshold: 0.02
};


var AnchorAimSystem = {

    Enabled: true,

    // ———————————————
    // ANCHOR LOCK CORE – MAX
    // ———————————————
    AnchorStrength: 3.0,              // siêu bám – gần như dính cứng đầu
    AnchorRecovery: 1.0,              // auto-correction mạnh nhất
    AnchorMaxAngle: 360.0,            // chạy ở mọi góc lệch  (MAX)

    AnchorOffset: { x: 0.0, y: 0.020, z: 0.0 },  // head peak + 6–7px

    // ———————————————
    // DRAG & SWIPE – MAX
    // ———————————————
    AnchorDragAssist: true,
    DragCorrectionStrength: 1.5,      // chống lệch tuyệt đối
    AntiOverDrag: 1.2,                // không bao giờ vượt đầu
    DragReturnSpeed: 1.4,             // nhả tay → snap về head cực nhanh

    // ———————————————
    // STABILITY ENGINE – MAX
    // ———————————————
    KalmanFactor: 0.95,               // mượt – siêu ít noise
    MicroStabilizer: true,
    MicroStability: 1.0,              // triệt rung 100%
    AntiShakeFrequency: 0.010,        // lọc rung cực nhỏ

    // ———————————————
    // ANCHOR LEAD PREDICTOR – MAX
    // ———————————————
    PredictiveAnchor: true,
    AnchorLeadStrength: 1.2,          // đón đầu mạnh
    AnchorVelocityImpact: 1.0,        // theo chuẩn vận tốc enemy
    SmoothLeadBlend: 1.0,             // blend lead vào anchor mượt tuyệt đối

    // ———————————————
    // RANGE ADAPTIVENESS – MAX
    // ———————————————
    RangeAdaptive: true,

    CloseRangeBoost: 2.5,             // cận chiến = auto head giữ cứng
    MidRangeTightness: 1.8,           // tầm trung = siết chặt
    LongRangePrecision: 1.6,          // xa = chống rung + không droppoint

    // ———————————————
    // ANCHOR RESOLVER – MAX
    // ———————————————
    AnchorResolver: true,
    ResolverHistory: 6,
    ResolverSnap: 1.5,                // snap cực nhanh về anchor
    ResolverJitterFilter: 1.4,        // lọc jitter mạnh cho teleport

    // ———————————————
    // HEAD ROTATION AWARE – MAX
    // ———————————————
    RotationAwareAnchor: true,
    RotationPitchMul: 0.45,
    RotationYawMul: 0.40,
    RotationRollMul: 0.30,            // hỗ trợ mọi hướng xoay đầu

    // ———————————————
    // ANTI-SLIDE / ANTI-DROP – MAX
    // ———————————————
    AntiDropOnDrag: 1.2,              // không bao giờ tụt tâm xuống cổ
    AntiSlideOffHead: 1.1,            // giữ head khi enemy zigzag
    VerticalAnchorLock: 1.0           // khóa dọc tuyệt đối – đứng im trên head
};

var QuickSwipeAimSystem = {

    EnableQuickSwipe: true,

    // ————————————————————————
    //  CORE SWIPE RESPONSE – MAX
    // ————————————————————————
    SwipeSensitivityBoost: 3.0,       // nhạy cực cao khi swipe
    SwipeAcceleration: 2.5,           // tăng tốc kéo dính đầu
    SwipeFriction: 0.02,              // gần như không ma sát → vuốt siêu nhanh

    MinSwipeSpeed: 0.001,             // vuốt rất nhẹ cũng nhận là quickswipe
    MaxSwipeWindow: 0.14,             // phạm vi nhận swipe rộng (0.08 → 0.14)

    // ————————————————————————
    //  QUICK HEAD ASSIST – MAX
    // ————————————————————————
    QuickHeadBias: 2.2,               // kéo head cực mạnh ngay khi swipe
    QuickHeadRange: 360.0,            // hỗ trợ full góc, không giới hạn

    QuickSwipeLift: 2.0,              // auto nâng tâm lên đầu cực nhanh
    VerticalSwipeAssist: 1.8,         // bám chuyển động đầu theo trục dọc

    // ————————————————————————
    //      CONTROL / STABILITY – MAX
    // ————————————————————————
    QuickMicroStabilizer: true,
    MicroStabilityStrength: 1.6,      // triệt rung khi swipe mạnh

    AntiOverSwipe: 2.0,               // chống vượt head khi swipe dài
    AntiSlideDrift: 1.8,              // khóa trôi tâm (driftfix mạnh)

    // ————————————————————————
    //       DYNAMIC BEHAVIOR – MAX
    // ————————————————————————
    AdaptiveSwipeMode: true,

    CloseRangeBoost: 3.0,             // cận chiến: quickswipe auto head
    MidRangeBoost: 2.0,               // trung tầm: tang tốc swipe mạnh
    LongRangePrecisionTighten: 1.8,   // xa: siết aim chính xác tuyệt đối

    // ————————————————————————
    //        MOTION PREDICTOR – MAX
    // ————————————————————————
    SwipePredictStrength: 1.5,        // dự đoán hướng enemy mạnh
    SwipePredictLead: 1.0,            // đón đầu cực cứng khi enemy chạy

    // ————————————————————————
    //          FEEL & NATURALITY – MAX
    // ————————————————————————
    SwipeCurveBlend: 1.0,             // cong quỹ đạo swipe siêu mượt
    EaseOutNearHead: 1.5,             // hòa tốc độ khi chạm head nhưng vẫn dính

    // ————————————————————————
    //           LIMITERS – MAX
    // ————————————————————————
    SwipeClampMin: 0.0010,            // xử lý swipe nhỏ không rung
    SwipeClampMax: 0.0400,            // swipe lớn nhưng không mất kiểm soát
};

var FeatherAimSystem = {

    EnableFeatherAim: true,

    // ——————————————————————————
    //     CORE FEATHER MOTION – MAX
    // ——————————————————————————
    FeatherSmoothness: 1.0,             // độ mượt tuyệt đối
    FeatherGlide: 1.0,                  // trượt mềm như lông → drag siêu nhẹ

    FeatherResistance: 0.05,            // lực cản cực nhỏ → nhẹ nhất có thể

    // ——————————————————————————
    //       FEATHER HEAD LOCK – MAX
    // ——————————————————————————
    FeatherHeadBias: 1.5,               // auto kéo đầu rất mềm nhưng cực chuẩn
    FeatherHeadAngleMax: 360.0,           // hoạt động full góc – không giới hạn

    FeatherAutoLift: 1.4,               // auto nâng tâm lên head mượt nhưng mạnh
    FeatherVerticalAssist: 1.2,         // hỗ trợ lên/xuống nhẹ nhưng dính

    // ——————————————————————————
    //           MICRO STABILITY – MAX
    // ——————————————————————————
    MicroFeatherControl: true,
    MicroFeatherStrength: 1.8,          // triệt rung micro theo cơ chế feather

    SoftOvershootGuard: 1.25,           // chống vượt head nhưng cực mềm
    SoftReturnToHead: 1.5,              // lệch nhẹ → tự quay lại head rất mượt

    // ——————————————————————————
    //            DRAG BEHAVIOR – MAX
    // ——————————————————————————
    FeatherDragScaler: 1.0,             // drag nhẹ tối đa
    FeatherSpeedBlend: 1.0,             // hòa tốc độ drag mạnh → glide mượt

    // ——————————————————————————
    //         ADAPTIVE MOTION – MAX
    // ——————————————————————————
    AdaptiveFeatherMode: true,

    FeatherNearRangeBoost: 1.5,         // địch gần → aim siêu mềm, siêu dính
    FeatherMidRangeBoost: 1.3,
    FeatherLongRangeTightness: 1.1,     // xa → siết chính xác tuyệt đối

    // ——————————————————————————
    //   FEATHER "MẮT ĐỌC TRƯỚC CHUYỂN ĐỘNG" – MAX
    // ——————————————————————————
    PredictiveFeatherRead: 1.2,         // đọc hướng enemy mạnh
    PredictiveFeatherOffset: 0.9,       // đón đầu mềm nhưng auto-correct mạnh

    // ——————————————————————————
    //                SAFETY – MAX
    // ——————————————————————————
    FeatherClampMin: 0.0010,            // giữ không rung cho swipe nhỏ
    FeatherClampMax: 0.0400,            // đảm bảo không lắc khi drag lớn

    // ——————————————————————————
    //        NATURAL FEEL – MAX
    // ——————————————————————————
    FeatherNaturalCurve: 1.0,           // cong aim cực tự nhiên như aim thủ
    FeatherEaseOut: 1.2,                // giảm tốc cực mềm khi chạm headbox
};

var HeadfixSystem = {

    EnableHeadFix: true,               // bật headfix tuyệt đối

    // ——————————————————————————
    //        ABSOLUTE HEAD LOCK
    // ——————————————————————————
    HeadLockBias: 3.0,                 // lực kéo vào headbone cực mạnh
    HeadStickStrength: 3.0,            // giữ tâm bám đầu tuyệt đối

    // ——————————————————————————
    //        MICRO PRECISION
    // ——————————————————————————
    MicroCorrection: true,
    MicroCorrectionStrength: 3.0,      // tự chỉnh 1–3px tức thì, chính xác tuyệt đối

    // ——————————————————————————
    //         ANTI-SLIP SYSTEM
    // ——————————————————————————
    AntiSlipNeck: true,
    AntiSlipStrength: 3.0,             // không bao giờ rơi xuống cổ

    // ——————————————————————————
    //     HEAD GRAVITY / MAGNET LOCK
    // ——————————————————————————
    HeadGravity: 3.0,                  // lực hút vào đầu mạnh như nam châm
    MaxHeadAngle: 360.0,                 // hoạt động full angle – không giới hạn

    // ——————————————————————————
    //      VERTICAL & HORIZONTAL FIX
    // ——————————————————————————
    VerticalHeadFix: 3.0,              // kéo lên đỉnh đầu cực nhanh
    HorizontalStabilizer: 3.0,         // cố định ngang – không trượt trái/phải

    // ——————————————————————————
    //            NO OVERSHOOT
    // ——————————————————————————
    NoOvershootFix: true,
    NoOvershootStrength: 3.0,          // chống vượt đầu mạnh nhất

    // ——————————————————————————
    //          RANGE ADAPTIVE FIX
    // ——————————————————————————
    DistanceAdaptiveFix: true,

    CloseRangeBoost: 3.0,              // bám mạnh nhất ở tầm gần
    MidRangeBoost: 2.5,                // vẫn siết mạnh
    LongRangeBoost: 2.0,               // xa → ít drop nhưng vẫn cực dính

    // ——————————————————————————
    //     HEAD MOTION TRACKING
    // ——————————————————————————
    HeadTrackingAssist: true,
    HeadTrackingStrength: 3.0,         // theo mọi chuyển động đầu real-time

    // ——————————————————————————
    //      SMOOTHNESS & PRIORITY
    // ——————————————————————————
    SmoothTransition: 1.0,             // mượt tối đa nhưng vẫn lực
    HeadSnapPriority: 3.0,             // ưu tiên head trước mọi thứ khác

    // ——————————————————————————
    //               SAFETY
    // ——————————————————————————
    ClampFactorMin: 0.0005,            // chống rung micro
    ClampFactorMax: 0.2000,            // không bị giật khi snap cực mạnh
};

var DefaultNeckAimAnchor = {
    Enabled: true,               // bật chế độ aim mặc định vào cổ

    DefaultBone: "bone_Neck",    // luôn đặt mục tiêu mặc định vào cổ
    NeckPriority: true,          // ưu tiên cổ khi không lock đầu

    LockToHeadOnEngage: true,    // khi bắn/drag → tự chuyển sang head
    SmoothTransition: 0.0,      // độ mượt khi chuyển từ neck → head
    SnapBias: 2.35,              // kéo nhẹ về cổ khi đang không giao chiến

    // OFFSET CHUẨN CHO CỔ (đảm bảo không lệch)
    NeckOffset: { 
         x: -0.0456970781,
        y: -0.004478302,
         z: -0.0200432576
    },

    // Rotation nhẹ để camera không lệch khi nhìn cổ
    RotationOffset: { 
         x: 0.0258174837,

          y: -0.08611039,

          z: -0.1402113,

          w: 0.9860321

        

      

    },

    // CHỐNG RUNG KHI GIỮ TÂM Ở CỔ
    Stabilizer: {
        Enabled: true,
        KalmanFactor: 0.90,      // lọc rung cổ
        MicroStabilize: 0.92,    // giữ tâm không dao động
        AntiJitter: 0.85         // chống rung khi enemy chạy
    },

    // DÙNG CHO CAMERA MẶC ĐỊNH
    DefaultTrackingSpeed: 1.0,   // tốc độ giữ tâm ở cổ
    Stickiness: "medium",        // độ bám vào cổ ở trạng thái idle
};

var HeadTracking = {
    // ===== CORE LOCK =====
    LockStrength: 2.0,           // lực lock tối đa
    SnapSpeed: 2.0,             // tốc độ “bắt đầu” xoay về head
    TrackingStickiness: 2.0,     // độ bám dính vào head

    // ===== KHI ĐỊCH CHẠY NHANH =====
    VelocityTrackingBoost: 2.0, // tăng bám theo tốc độ địch
    VelocitySmoothing: 0.15,     // giảm dao động khi địch đổi hướng

    // ===== KHI GẦN HEADBOX =====
    MicroCorrection: 0.82,       // chỉnh nhỏ để không lệch tâm
    MaxCorrectionAngle: 360.0,     // lớn hơn = dễ bám head khi chạy zigzag

    // ===== KHI NHẢY / AIR =====
    AirPrecisionBoost: 1.0,
    AirVerticalLead: 0.001,      // dự đoán độ rơi đầu

    // ===== KALMAN FILTER =====
    KalmanFactor: 0.78,          // giữ tracking ổn định không rung
    AntiJitter: 0.92,            // chống jitter khi địch đổi hướng

    // ===== TẦM XA =====
    LongRangeAssist: 2.0,
    LongRangeHeadBias: 2.0,

    // ===== CHỐNG MẤT LOCK =====
    LockRecoverySpeed: 1.0,      // mất lock 1 chút → kéo lại ngay
    MaxLockDrift: 360.0,           // chênh lệch góc tối đa cho phép
    DriftCorrectStrength: 1.0,  // kéo lại về head nếu lệch

    // ===== OFFSET THEO ANIMATION =====
    RunOffset: 0.0051,
    JumpOffset: 0.0083,
    SlideOffset: -0.0022,
    CrouchOffset: 0.0019,

    // ===== PREDICTION =====
    PredictionFactor: 2.0,
    HeadLeadTime: 0.018,         // dự đoán 18ms trước

    // ===== CHỐNG OVERSHOOT =====
    OvershootProtection: 1.0,
    Damping: 0.4,
};

var ScreenTouchSens = {

    EnableScreenSensitivity: true,   // bật module nhạy màn + cảm ứng
  BaseTouchScale: 12.0,               // siêu nhạy màn (tăng gấp ~12 lần)
DynamicTouchBoost: 0.55,            // bứt tốc mạnh khi drag nhanh
FingerSpeedThreshold: 0.0008,       // bắt tốc độ từ rất sớm ⇒ kích boost nhanh

PrecisionMicroControl: true,
MicroControlStrength: 1.35,         // kiểm soát vi mô cực mạnh, triệt rung

OvershootProtection: 1.0,           // chống vượt đầu ở mức tối đa
OvershootDamping: 0.85,             // hãm gấp khi sắp vượt headbox

DecelerationNearHead: 10.0,         // khi gần head → hãm cực mạnh để khóa đỉnh
DecelerationDistance: 0.030,        // mở rộng vùng hãm để dễ dính head hơn

FineTrackingAssist: 10.0,           // tracking siêu bám theo đầu di chuyển
FineTrackingMaxAngle: 10.0           // tăng phạm vi kích hoạt tracking lên 5°


    // --- Bộ phân tích chuyển động cảm ứng ---
    lastTouchX: 0,
    lastTouchY: 0,
    lastTouchTime: 0,

    processTouch(x, y) {
        let now = Date.now();
        let dt = now - this.lastTouchTime;
        if (dt < 1) dt = 1;

        let dx = x - this.lastTouchX;
        let dy = y - this.lastTouchY;
        let fingerSpeed = Math.sqrt(dx*dx + dy*dy) / dt;

        this.lastTouchX = x;
        this.lastTouchY = y;
        this.lastTouchTime = now;

        // Tăng nhạy màn khi drag nhanh
        let dynamicBoost = 1.0;
        if (fingerSpeed > this.FingerSpeedThreshold) {
            dynamicBoost += this.DynamicTouchBoost;
        }

        return {
            dx: dx * this.BaseTouchScale * dynamicBoost,
            dy: dy * this.BaseTouchScale * dynamicBoost,
            speed: fingerSpeed
        };
    },

    // --- Bộ xử lý khi tâm gần headbox ---
    applyNearHeadControl(angleDiff, distanceToHead) {

        let adjust = 1.0;

        // Hãm tốc khi gần head
        if (this.DecelerationNearHead && distanceToHead < this.DecelerationDistance) {
            adjust *= (1 - this.DecelerationNearHead);
        }

        // Chống vượt head
        if (this.OvershootProtection && angleDiff < 1.5) {
            adjust *= (1 - this.OvershootDamping);
        }

        // Micro control — ổn định tâm
        if (this.PrecisionMicroControl && angleDiff < 2.0) {
            adjust *= (1 - this.MicroControlStrength * 0.3);
        }

        // Tracking mượt
        if (this.FineTrackingAssist && angleDiff <= this.FineTrackingMaxAngle) {
            adjust *= (1 + this.FineTrackingAssist * 0.15);
        }

        return adjust;
    }
};

var TouchSensSystem = {

    Enabled: true,

    // ============================
    //  TOUCH SENS BOOST (NHẠY MÀN)
    // ============================
    BaseTouchSensitivity: 5.0,      // nhạy gốc – càng cao càng nhanh
    FlickBoost: 5.35,               // tăng vận tốc flick nhanh (kéo mạnh)
    MicroDragBoost: 1.12,           // nhạy tinh cho drag lên đầu
    VerticalSensitivityBias: 0.0,  // giảm rung dọc, dễ kéo lên đầu
    HorizontalSensitivityBias: 3.5,// tăng nhẹ ngang, tracking dễ hơn

    // ============================
    //  TOUCH RESPONSE (ĐỘ NHẠY PHẢN HỒI)
    // ============================
    TouchLatencyCompensation: -22,  // bù trễ phản hồi, âm = nhanh hơn
    MultiTouchCorrection: true,     // sửa lỗi "kẹt cảm ứng" khi kéo bằng 2 ngón
    TouchNoiseFilter: 0.92,         // lọc nhiễu cảm ứng (tay ướt, tay rung)
    TouchJitterFix: 0.90,           // chống jitter khi drag chậm
    StableFingerTracking: 0.88,     // giữ quỹ đạo tay ổn định

    // ============================
    //  DYNAMIC TOUCH BOOST (NHẠY BIẾN THIÊN)
    // ============================
    DynamicSensitivityEnabled: true,
    DynamicBoostMin: 10.0,           // nhạy khi kéo chậm
    DynamicBoostMax: 10.0,          // nhạy khi kéo mạnh
    DynamicAccelerationCurve: 0.85, // đường cong tăng tốc cảm ứng
    DynamicFlickThreshold: 0.008,   // nếu tốc độ > ngưỡng này → bật flick boost

    // ============================
    //  PRECISION TOUCH ENGINE (NHẠY CHUẨN HEADSHOT)
    // ============================
    PrecisionMicroControl: true,    
    MicroControlStrength: 1.0,     // giảm dao động nhỏ khi nhắm đầu
    OvershootProtection: 1.0,      // chống vượt quá đầu khi kéo nhanh
    DecelerationNearHead: 0.0,     // giảm tốc khi tâm đến gần headbox
    FineTrackingAssist: 0.0,       // tracking mượt theo đầu đang chạy

    // ============================
    //  TOUCH GRID OPTIMIZATION (BÙ MẠNG LƯỚI MÀN)
    // ============================
    TouchPixelGridCompensation: true,
    PixelGridSmoothFactor: 0.88,    // làm mượt các bước nhảy pixel
    FingerPathPredict: 0.012,       // dự đoán hướng ngón tay di chuyển
    TouchCurveLinearization: 0.95,  // giữ quỹ đạo drag không bị cong sai

    // ============================
    //  DEVICE ADAPT MODE (TỰ ĐỘNG TỐI ƯU THEO MÁY)
    // ============================
    DeviceAdaptiveMode: true,
    ScreenSamplingRateBoost: 1.35,  // mô phỏng tần số cảm ứng cao hơn
    TouchDecayFixer: 1.0,           // chống giảm nhạy sau vài phút bắn
    PalmRejectionEnhancer: true,    // chống nhận nhầm lòng bàn tay

    // ============================
    //  DEBUG / TUNING
    // ============================
    DebugTouchLog: false,
    StabilizerLevel: "high",
    CalibrationOffset: 0.00
};

var LightHeadDragAssist = {

    Enabled: true,

    // ===== NHẸ TÂM NGẮM =====
    DragLiftStrength: 999.0,      // lực nâng tâm lên đầu khi drag
    VerticalAssist: 1.0,        // tăng độ nổi trục Y khi kéo
    HorizontalEase: 1.0,        // làm nhẹ trục X -> drag không bị nặng

    // ===== ƯU TIÊN ĐẦU =====
    HeadBiasStrength: 1.0,      // tự kéo nhẹ về hướng bone_Head
    MaxHeadBiasAngle: 360.0,       // chỉ chạy khi lệch đầu dưới 2.5°

    // ===== CHỐNG TUỘT KHI DRAG =====
    AntiSlipFactor: 1.0,        // chống tuột tâm khỏi đầu
    MicroCorrection: 0.985,      // hiệu chỉnh siêu nhỏ
    StabilitySmooth: 0.0,       // chống rung nhẹ khi kéo

    // ===== BONE DỮ LIỆU CHUẨN =====
    BoneHeadOffsetTrackingLock: {
        x: -0.0456970781,
        y: -0.004478302,
        z: -0.0200432576
    },

    // ===== TỰ NỔI KHI FIRE =====
    FireLiftBoost: 1.0,         // khi bắn sẽ nâng tâm nhẹ lên vùng head

    // ===== CHỐNG OVERSHOOT =====
    OvershootLimit: 1.0,        // hạn chế vượt quá đầu
    OvershootDamping: 1.0,      // giảm lực khi vượt headbox

    // ===== KALMAN NHẸ =====
    KalmanFactor: 0.0,          // làm mượt drag nhưng không khóa
};

var HardLockSystem = {
    enabled: true,

    // ===== CORE LOCK SETTINGS =====
    coreLock: {
        snapSpeed: 1.0,
        hardLockStrength: 1.0,
        microCorrection: 0.96,
        maxAngleError: 0.0001,
        stableDrag: 1.0,
        antiDropDrag: 1.0,
        kalmanFactor: 0.97
    },

    // ===== TARGET WEIGHTS =====
    weights: {
        headWeight: 2.0,
        neckWeight: 0.2,    // 10% of headWeight
        chestWeight: 0.1    // 5% of headWeight
    },

    // ===== HEAD LOCK SYSTEMS =====
    hyperHeadLock: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileDragging: true,
        stickiness: "hyper",
        snapToleranceAngle: 0.0,
        disableBodyRecenter: true,
        trackingSpeed: 10.0,
        smoothing: 0.0,
        maxDragDistance: 999.0,
        snapBackToHead: true,
        predictionFactor: 1.5,
        autoFireOnLock: true,
        boneOffset: { x: -0.0457, y: -0.00448, z: -0.02004 },
        rotationOffset: { x: 0.02582, y: -0.08611, z: -0.14021, w: 0.98603 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    stableHeadLock: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileDragging: true,
        stickiness: "extreme",
        snapToleranceAngle: 0.0,
        disableBodyRecenter: true,
        trackingSpeed: 5.0,
        smoothing: 0.0,
        maxDragDistance: 0.0,
        snapBackToHead: true,
        predictionFactor: 1.2,
        boneOffset: { x: -0.0457, y: -0.00448, z: -0.02004 },
        rotationOffset: { x: 0.02582, y: -0.08611, z: -0.14021, w: 0.98603 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    instantDragToHead: {
        enabled: true,
        targetBone: "bone_Head",
        snapOnDragStart: true,
        holdLockWhileDragging: true,
        maxSnapDistance: 0.01,
        trackingSpeed: 2.0,
        smoothing: 0.0,
        snapToleranceAngle: 0.0,
        disableBodyRecenter: true,
        predictionFactor: 1.0,
        boneOffset: { x: -0.0457, y: -0.00448, z: -0.02004 },
        rotationOffset: { x: 0.02582, y: -0.08611, z: -0.14021, w: 0.98603 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    autoAimLockHead: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileFiring: true,
        dragSmoothFactor: 0.85,
        maxDragDistance: 0.02,
        snapBackToHead: true,
        trackingSpeed: 1.5,
        predictionFactor: 0.9,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        disableBodyRecenter: true,
        smoothing: 1.0,
        boneOffset: { x: -0.0457, y: -0.00448, z: -0.02004 },
        rotationOffset: { x: 0.02582, y: -0.08611, z: -0.14021, w: 0.98603 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    aimNeckLock: {
        enabled: true,
        aimBone: "bone_Neck",
        autoLock: true,
        lockStrength: "maximum",
        snapBias: 1.0,
        trackingSpeed: 1.0,
        dragCorrectionSpeed: 4.8,
        snapToleranceAngle: 0.0,
        maxLockAngle: 360,
        stickiness: "high",
        neckStickPriority: true,
        boneOffset: { x: -0.1285, y: 0.0, z: 0.0 },
        rotationOffset: { x: -0.01274, y: -0.00212, z: 0.16431, w: 0.98633 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    antiRecoil: {
        enabled: true,
        targetBone: "bone_Head",
        autoCompensateRecoil: true,
        compensationStrength: 0.95,
        smoothFactor: 0.9,
        stickiness: "extreme",
        applyWhileFiring: true,
        predictionFactor: 0.0,
        adaptToWeapon: true
    },

    // ===== DYNAMIC HARDLOCK =====
    dynamicHardLock: {
        enabled: true,
        minSpeed: 0.2,
        maxSpeed: 6.0,
        extraLockBoost: 0.15,
        velocitySmoothing: 0.85
    },

    // ===== DRAG LOCK =====
    dragLockHead: {
        enabled: true,
        maxDragSpeed: 1.0,
        dragAccelerationSmooth: 0.88,
        dragVelocityClamp: 0.78,
        microCorrection: 0.995,
        antiOvershoot: 1.0,
        kalmanFactor: 0.97,
        snapBackForce: 0.99
    },

    // ===== AIR HEAD CORRECTOR =====
    airHeadCorrector: {
        enabled: true,
        verticalBoost: 0.012,
        predictionLead: 0.018,
        gravityCompensation: 0.95
    },

    // ===== RECOIL & SMOOTH BLEND =====
    ultraSmoothRecoilBlend: {
        enabled: true,
        recoilNeutralize: 1.0,
        blendStrength: 0.92,
        stabilizeFalloff: 1.0,
        instantRecovery: 0.0
    },

    // ===== ROTATION-AWARE HEAD OFFSET =====
    rotationAwareHeadOffset: {
        enabled: true,
        baseOffset: { x: 0.0, y: 0.025, z: 0.0 },
        maxTiltOffset: 0.018,
        maxYawOffset: 0.020,
        maxPitchOffset: 0.022
    },

    // ===== MOTION PREDICTOR =====
    animationMotionPredictor: {
        enabled: true,
        runBoost: 0.015,
        crouchBoost: -0.010,
        slideBoost: 0.020,
        jumpBoost: 0.018,
        predictionFactor: 0.012
    },

    // ===== ULTIMATE LOCK RESOLVER =====
    ultimateLockResolver: {
        enabled: true,
        maxDrift: 0.085,
        snapBackForce: 0.95,
        jitterFilter: 0.90,
        antiPeekLoss: true,
        historyFrames: 5
    },

    // ===== UTILITY =====
    autoShotHead: { autoHeadshot: true, aimListextension: true },
    fixLagBoost: { fixResourceTask: true },
    closeLauncherRestore: { closeLauncher: true, forceRestore: true }
};

// ====== SYSTEM & PERFORMANCE OPTIMIZATION ======

var FreeFireScreenBlackFix = {

    // ====== GENERAL FIX ======
    EnableBlackScreenFix: true,         // Bật module fix màn hình đen
    AutoRenderRecovery: true,           // Tự phục hồi render khi bị drop
    FrameSkipCompensation: true,        // Giữ FPS khi lag render
    MinFrameRate: 60,                   // FPS tối thiểu, tránh crash render
    MaxRenderLoad: 0.95,                // Không quá tải GPU/CPU

    // ====== GRAPHICS SAFETY ======
    DisableHeavyShaders: true,          // Tắt shader nặng
    ReduceParticleEffects: true,        // Giảm smoke/explosion
    LowTextureMode: true,               // Texture nhẹ, giảm tải
    VSyncBypass: true,                  // Bỏ đồng bộ VSync nếu gây lag
    RenderScaleLimit: 0.75,             // Giảm render scale khi cảnh nặng
    AdaptiveLOD: true,                  // Giảm Level of Detail khi quá tải

    // ====== SYSTEM SAFETY ======
    ThermalThrottleProtection: true,    // Giảm nhiệt khi GPU nóng → tránh black screen
    CPUBoost: true,                     // Tăng xung CPU để giữ render
    GPUBoost: true,                     // Tăng xung GPU
    BackgroundProcessLimit: true,       // Giảm app chạy ngầm
    MemoryGuard: true,                  // Giữ RAM trống, tránh crash

    // ====== RECOVERY & MONITOR ======
    AutoRecoveryLoop: true,             // Tự check render và recover
    RecoveryInterval: 0.05,             // Kiểm tra mỗi 50ms
    DebugLogs: false,                   // In log khi render bị drop
    OverlayCheck: true                  // Tắt overlay gây xung đột
};

var FreeFireFPSOptimizer = {

    // ====== FPS BOOST ======
    EnableFPSBoost: true,
    TargetFPS: 144,                    // Mục tiêu FPS
    FrameRateCap: 0,                   // 0 = không giới hạn
    FrameSkipDynamic: 0.55,            // Tự động bỏ khung dư thừa
    UltraLowLatencyMode: true,         // Giảm input lag tối đa
    FrameSyncCompensation: true,       // Giữ ổn định frame khi load map nặng

    // ====== GRAPHICS OPTIMIZATION ======
    ReduceShaders: true,               // Tắt shader nặng
    LowQualityTextures: true,          // Dùng textures nhẹ
    DisableMotionBlur: true,           // Tắt blur, hiệu ứng chuyển động
    DisableBloom: true,
    DisableLensFlare: true,
    LowParticleEffects: true,          // Giảm smoke, fire, explosion particles
    RenderDistance: 0.75,              // Giảm render khoảng cách
    ShadowQuality: 0.3,                // Bóng nhẹ hoặc tắt
    PostProcessing: 0.0,               // Tắt hậu kỳ
    VSyncBypass: true,                 // Bỏ đồng bộ VSync
    AntiAliasing: false,               // Tắt AA nặng
    RenderScale: 0.6,                  // Giảm độ phân giải render

    // ====== SYSTEM OPTIMIZATION ======
    CPUBoost: true,                    // Tăng xung CPU cho game
    GPUBoost: true,                    // Tăng xung GPU
    ThermalThrottleBypass: true,       // Chống hạ FPS do nhiệt
    BatterySaverDisable: true,         // Tắt chế độ tiết kiệm pin
    BackgroundProcessLimit: true,      // Giảm background app
    InputPriorityBoost: true,          // Ưu tiên xử lý touch
    TouchResponseBoost: true,          // Giảm lag cảm ứng

    // ====== ADAPTIVE PERFORMANCE ======
    DynamicFPSAdjustment: true,        // Tự giảm/ tăng FPS theo cảnh nặng
    AdaptiveRenderScale: true,         // Tự hạ render khi map nặng
    AutoLODManagement: true,           // Thay đổi Level of Detail theo camera
    CameraPerformanceBoost: true,      // Giữ ổn định camera
    MinFPSGuarantee: 60,               // FPS tối thiểu
    MaxResourceUsage: 0.95,            // Không dùng quá 95% CPU/GPU

    // ====== DEBUG ======
    DebugPerformanceLogs: false,
    ShowFPSOverlay: false,
    ShowRenderLoad: false
};

var CrosshairAntiShakeDragFix = {

    EnableAntiShakeDrag: true,             // Bật chống rung khi drag
    DragStabilizer: "UltraSmooth",         // Chế độ ổn định (UltraSmooth / Smooth / Medium)

    // ====== FILTERS ======
    MicroJitterFilter: true,               // Lọc rung nhỏ cấp pixel
    SubPixelSmoothing: 0.92,               // Làm mượt pixel dưới 1px
    MicroMovementDeadzone: 0.00085,        // Ngưỡng loại bỏ chuyển động rất nhỏ

    // ====== DRAG FORCE CONTROL ======
    DragForceLimiter: true,                // Giảm lực drag khi quá gấp
    MaxDragSpeed: 1.93,                    // Hạn mức drag tối đa (0.90–0.98)
    DragAccelerationSmooth: 1.88,          // Làm mượt gia tốc khi kéo
    DragVelocityClamp: 1.78,               // Chặn tốc độ thay đổi quá nhanh

    // ====== SNAP TRANSITION FIX ======
    SmoothSnapTransition: true,            // Chuyển động mượt khi đang drag mà snap vào target
    SnapDamping: 1.84,                     // Giảm rung khi snap
    PredictiveStabilizer: true,            // Ổn định trước khi chuyển hướng

    // ====== LOCK + DRAG COMBINATION ======
    DragToLockBlend: 1.90,                 // Giảm rung khi drag gần hitbox
    NearHeadStabilizer: 2.0,              // Giữ tâm không rung khi gần đầu
    LimitDirectionalOscillation: true,     // Chặn tâm lắc trái phải khi kéo nhanh

    // ====== KALMAN & PREDICTION FIX ======
    KalmanStabilizerEnabled: true,
    KalmanAggressiveSmoothing: 0.008,      // Giá trị càng nhỏ → càng mượt
    PredictionJitterFix: 0.002,            // Giảm lỗi prediction gây rung

    // ====== ADVANCED ======
    AdaptiveAntiShake: true,               // Tự thay đổi theo tốc độ drag
    HighSpeedDragControl: 0.82,            // Chống rung khi kéo cực nhanh
    LowSpeedDragBoost: 1.12,               // Mượt hơn khi kéo chậm
    VerticalStabilizer: true,              // Chống rung dọc khi kéo lên head
    HorizontalStabilizer: true,            // Chống rung ngang khi tracking

    // ====== DEBUG ======
    DebugDragShake: false
};

var PerfectBulletHeadPath = {

    EnableBulletRedirect: true,           // Bật tính năng đạn tự căn vào đầu
    BulletToHeadMagnet: true,             // Hút đường đạn thẳng tới bone_Head
    BulletPrecision: 1.0,                 // 1.0 = chính xác tuyệt đối

    // ====== HEAD TRAJECTORY CONTROL ======
    HeadTrajectoryLock: true,             // Khoá quỹ đạo đạn vào đầu
    HeadBoneReference: "bone_Head",       // Bone tham chiếu
    MaxTrajectoryDeviation: 0.00001,      // Không cho lệch khỏi đường thẳng
    SubPixelTrajectoryFix: true,          // Giữ đường đạn dưới mức pixel

    // ====== BULLET CORRECTION ======
    EnableTrajectoryCorrection: true,     // Tự sửa đường đạn sai lệch
    CorrectionStrength: 1.0,              // Độ mạnh sửa quỹ đạo
    AutoCorrectNearHead: true,            // Khi gần head → tự magnet

    // ====== DYNAMIC ADAPTATION ======
    DistanceBasedCorrection: true,        // Sửa theo khoảng cách
    VelocityBasedCorrection: true,        // Sửa theo tốc độ kẻ địch
    DynamicBulletSpeedBoost: 1.15,        // Tăng logic tốc độ "ảo" vào head
    VerticalErrorCompensation: true,      // Sửa sai số khi địch nhảy

    // ====== AIM & FIRE SYNC ======
    SyncWithAimbot: true,                 // Đồng bộ với aimbot để headshot
    AutoHeadFire: true,                   // Tự bắn khi đường đạn khóa vào head
    FireDelayCompensation: 0.00005,       // Loại bỏ delay đạn
    NoRecoilOnRedirect: true,             // Tắt rung khi đạn đang redirect

    // ====== PROTECTION ======
    AntiOvershoot: true,                  // Chặn đường đạn vượt qua đầu
    StabilizeFinalHit: true,              // Cố định điểm chạm cuối cùng
    SafeMode: false,                       // False = headshot tối đa

    // ====== DEBUG ======
    DebugBulletPath: false,               // In ra đường đạn để test
    ShowHeadTrajectoryLine: false         // Hiển thị đường đạn bằng line
};
var HeadLimitDrag = {

    // ====== GENERAL SETTINGS ======
    EnableHeadLimitDrag: true,          // Bật tính năng giới hạn tâm khi drag lên
    MaxHeadOffset: 0.0,                 // Tâm không vượt quá đỉnh đầu (0 = đỉnh đầu chính xác)
    DragSnapCurve: 1.92,                // Đường cong snap khi kéo tâm lên head
    SmoothDragLimit: true,               // Làm mượt khi dừng tại giới hạn
    OvershootPrevention: true,           // Ngăn drag vượt quá head
    HeadLimitReaction: 0.00001,          // Thời gian phản ứng khi gần đỉnh đầu
    SubPixelHeadLock: true,              // Theo dõi tâm dưới 1 pixel để tránh trồi lên

    // ====== DYNAMIC DRAG CONTROL ======
    AdaptiveDragLimit: true,             // Giới hạn thay đổi theo tốc độ drag
    FastDragReduction: 0.8,             // Giảm tốc độ drag khi gần đỉnh đầu
    SlowDragBoost: 1.15,                 // Giữ mượt khi drag chậm
    DragLockStrength: 0.98,              // Tăng cường giữ tâm không vượt head

    // ====== INTEGRATION WITH AIMLOCK ======
    IntegrateWithAimLock: true,          // Tự động kết hợp headlock khi drag
    SnapToBoneHead: true,                // Khi drag gần head, tự căn tâm vào bone_Head
    MinDistanceBeforeLimit: 0.01,        // Khoảng cách nhỏ trước khi áp dụng limit

    // ====== DEBUG ======
    DebugHeadLimitDrag: false,           // Hiển thị đường giới hạn để test
    ShowHeadLimitOverlay: false           // Vẽ overlay head limit trên màn hình
};

var CrosshairStabilityFix = {

    // ====== GLOBAL NO RECOIL / ANTI SHAKE ======
    EnableRecoilFix: true,
    MaxRecoilSuppression: 9999.0,       // Triệt hoàn toàn rung súng
    VerticalRecoilControl: 0.00001,     // Hạn chế tâm nhảy lên
    HorizontalRecoilControl: 0.00001,   // Hạn chế lệch trái/phải
    RecoilDamping: 0.99999999,          // Làm mượt đường giật
    RecoilSmoothFactor: 1.0,
    RecoilSnapReturn: 0.00000001,       // Tâm trở lại vị trí chính xác

    // ====== ANTI-CAMERA-SHAKE ======
    AntiShake: true,
    AntiCameraKick: true,
    ShakeReductionLevel: 0.95,
    CameraJitterFix: true,
    StabilizeWhileMoving: true,

    // ====== ADVANCED GUN-BY-GUN COMPENSATION ======
    WeaponRecoilProfiles: {
        default:      { vert: 0.00008, horiz: 0.00003, curve: 0.8 },
        mp40:         { vert: 0.00002, horiz: 0.00001, curve: 0.3 },
        thompson:     { vert: 0.00003, horiz: 0.00001, curve: 0.4 },
        ump:          { vert: 0.00003, horiz: 0.00001, curve: 0.3 },
        m4a1:         { vert: 0.00005, horiz: 0.00002, curve: 0.7 },
        scar:         { vert: 0.00004, horiz: 0.00002, curve: 0.65 },
        ak:           { vert: 0.00003, horiz: 0.00001, curve: 0.55 },
        m1887:        { vert: 0.000001, horiz: 0.000001, curve: 0.0001 }, 
        m1014:        { vert: 0.00002, horiz: 0.00001, curve: 0.25 }
    },

    // ====== REALTIME COMPENSATION ENGINE ======
    RealtimeRecoilTracking: true,
    DynamicRecoilAdapt: true,           // Tự chỉnh theo tốc độ bạn kéo tâm
    VelocityBasedCompensation: true,    // Tối ưu theo tốc độ enemy
    DistanceBasedRecoilFix: true,       // Cân bằng recoil theo khoảng cách
    TapFireStabilizer: true,            // Tối ưu bắn tap
    BurstControl: true,                 // Giữ tâm không văng khi spam đạn

    // ====== DRAG LOCK + RECOIL SYNC ======
    SyncDragToRecoil: true,             // Tâm kéo và giật đồng bộ
    DragSmoothCompensation: 0.99999985, // Tạo đường kéo mượt
    OvershootCorrection: true,          // Chống vượt tâm khi bắn

    // ====== RETICLE BOUNCE FIX (tâm nhảy khi bắn) ======
    FixReticleBounce: true,
    ReticleKickRemoval: 0.0000001,
    ReticleShakeAbsorb: 0.95,

    // ====== HIGH FPS OPTIMIZER ======
    FrameSyncCompensation: true,        // Giữ recoil mượt ở 60/90/120/144 FPS
    StabilityFrameFactor: 1.0,
    HighFpsStabilityBoost: 1.25,

    // ====== PURE SMOOTHING MODE ======
    EnableUltraSmoothMode: true,
    SmoothnessLevel: 0.99999999,
    MicroJitterElimination: true,

    // ====== DEBUG ======
    DebugRecoilFix: false
};

var SystemOptimizer = {

    // --- CPU / GPU Optimization ---
    EnableSystemBoost: true,
    CPUBoost: true,                  // Tăng ưu tiên CPU
    GPURenderBoost: true,            // Tối ưu render GPU
    GPUOverdrawReduction: true,      // Giảm tải đa lớp đồ hoạ
    ThermalLimitBypass: true,        // Bỏ throttling nhiệt
    BatterySaverBypass: true,        // Bỏ hạn chế tiết kiệm pin
    HighPerformanceGovernor: true,   // Buộc CPU chạy hiệu suất cao

    // --- RAM Optimization ---
    MemoryPooling: true,             // Gom bộ nhớ tối ưu
    ClearGarbageOnFrame: true,       // Tự giải phóng rác mỗi frame
    MaxMemoryReuse: true,            // Tái sử dụng object
    LowMemoryMode: false,            // Tắt (giữ hiệu năng cao)
    DynamicMemoryBalancer: true,     // Tự cân bằng RAM theo FPS

    // --- Frame Rate / Timing ---
    TargetFPS: 144,
    UnlockFPS: true,                 // Uncap FPS
    VSyncBypass: true,               // Bỏ giới hạn vsync
    ReduceFrameLatency: true,        // Giảm delay khung hình
    FrameTimeSmoothing: true,
    DynamicFrameControl: 0.45,       // Điều chỉnh frame theo tải máy
    InputLatencyReduction: true,     // Giảm delay cảm ứng

    // --- Touch / Input Optimization ---
    TouchSensorBoost: true,
    UltraTouchResponse: true,        // Phản hồi cực nhanh
    InputPriority: 3,                // Ưu tiên xử lý input
    GestureTrackingOptimization: true,
    TouchEventScheduler: 3,
    ScreenLatencyFix: true,          // Giảm lag màn hình
    ButtonResponseBoost: true,

    // --- Network / Ping Stabilizer ---
    NetworkStabilizer: true,
    PingSmoothLevel: 3,
    NetTickCompensation: true,
    PacketLossReducer: true,
    ServerSyncBoost: true,

    // --- Graphics Optimization ---
    RenderScale: 1.25,               // Tăng độ sắc nét không tốn GPU
    DynamicLodScaler: true,          // Giảm LOD khi quá tải
    TextureStreamBoost: true,        // Tải texture nhanh
    ShaderOptimization: true,
    SkipExpensiveShaders: true,
    ReduceAnimationCost: true,       // Giảm chi phí animation
    LowDetailFarObjects: true,
    HighDetailNearObjects: true,
    SmartShadowControl: true,        // Bật/tắt bóng theo FPS
    ParticleLimiter: 0.65,           // Giảm hiệu ứng nặng
    BloomAutoCut: true,
    MotionBlurDisable: true,
    AntiAliasingSmart: true,

    // --- Thermal / Power Management ---
    ThermalSuppressRate: 0.85,       // Hạn chế nóng máy
    AutoCoolingMode: true,
    StopThrottlingUnderLoad: true,
    PowerLimitOverride: true,

    // --- Device Optimization ---
    IOSLowLevelBoost: true,
    DisplayPipelineOpt: true,
    GraphicsThreadBoost: true,
    HighSystemPriority: true,
    SchedulerOptimize: true,
    ReduceKernelLatency: true,

    // --- Ultra Mode (max hiệu năng) ---
    UltraMode: true,
    UltraSmoothAnimation: true,
    UltraTouchSampling: true,        // Mô phỏng tần số quét cao
    UltraRenderQueue: true,
    UltraThermalControl: true,

    // --- Stability & Error Prevention ---
    CrashGuard: true,
    AvoidMemorySpike: true,
    FreezeSpikeFix: true,
    FrameDropPrevent: true,
    AutoRecoverWhenLag: true,
    StabilizeLowBatteryMode: true
};

var AimbotConfig = {
        Enabled: true,
        AimMode: "HitboxLock",
        Sensitivity: "High",
        Smoothing: 0.85,
        Prediction: "Kalman",
        PredictionStrength: 1.0,
        LockOn: true,
        LockStrength: 1.0,
        AimFOV: 360,
// ====== SHOOT EXACTLY (BẮN CHÍNH XÁC TUYỆT ĐỐI) ======
ShootExactlyEnabled: true,               // Bật chế độ bắn chuẩn xác
ExactHitboxLock: true,                   // Khoá đúng hitbox, không lệch pixel
ExactHitboxTolerance: 0.00095,           // Độ lệch tối đa cho phép (càng thấp càng chính xác)
FramePerfectTrigger: true,               // Bắn đúng frame khi tâm vào đầu
TriggerPrecision: 0.000001,              // Ngưỡng xác nhận 100% vào hitbox
NoOvershootAim: true,                    // Ngăn vượt qua đầu/chest
MicroAdjustStrength: 0.95,               // Điều chỉnh vi mô để khớp hitbox
AntiSlideAim: true,                      // Không bị "trượt mục tiêu"
HitConfirmFilter: true,                  // Chỉ bắn khi xác nhận hitbox trùng 100%
PixelPerfectHeadAlign: true,             // Căn chỉnh từng pixel vào tâm đầu
SubPixelTracking: true,                  // Theo dõi sub‑pixel (siêu nhỏ)
AutoFireWhenExact: true,                 // Chỉ bắn khi đạt độ chính xác cao
ExactFireDelay: 0.00001,                 // Thời gian bắn siêu nhỏ (khung hình)
ExactTargetBone: "bone_Head",            // Xác định bắn chính xác vào đầu
ExactLockVelocityComp: true,             // Tính chuyển động trước khi bắn
ExactDistanceCompensation: true,         // Bù khoảng cách theo thời gian thực
StabilityBoostOnFire: 1.25,              // Giảm rung lúc bắn
RecoilFreezeOnShot: true,                // Đóng băng recoil đúng thời điểm bắn
RecoilReturnToZero: true,                // Trả tâm về chuẩn sau khi bắn
ExactAngleCorrection: 0.0000001,         // Chỉnh góc siêu nhỏ
ExactSnapCurve: 0.975,                   // Đường cong snap phục vụ chính xác
BulletTravelPrediction: true,            // Dự đoán đạn theo tốc độ di chuyển
HitboxLagCompensation: true,             // Bù trễ hitbox của server
ServerTickAlignment: true,               // Đồng bộ theo tick server
FireSyncToFrameRate: true,               // Đồng bộ tốc độ bắn theo FPS
ExactModeLevel: 3,                        // 1 = normal, 2 = advanced, 3 = perfect mode

        EnableRealtimeEnemyTracking: true,
        RealtimeTrackingInterval: 0.001,
        MultiEnemyTracking: true,
        PredictEnemyMovement: true,
        PredictivePathCorrection: true,
        PredictiveSmoothing: 0.90,
        EnableDynamicFOV: true,
        FOVAngle: 90,
        MaxLockDistance: 999.0,
        ReactionTime: 0.001,
        AvoidObstacles: true,
        RetreatWhenBlocked: true,

        LockAimToEnemy: true,
        LockToHitbox: true,
        EnableAutoFire: true,
        AutoFireDelay: 0.020,
        AutoFireOnHeadLock: true,
        AutoFireSafeMode: false,

        HeadWeight: 2.0,
        NeckWeight: 1.2,
        ChestWeight: 0.8,
        PelvisWeight: 0.5,
        UseSmartZoneSwitch: true,
        PreferClosestHitbox: true,

        AdaptiveAimSensitivity: true,
      AimSensitivityHead: 1.0,
        AimSensitivityNeck: 9.0,
        AimSensitivityChest: 40.0,
        AimSensitivityPelvis: 50.55,
        HighSpeedTargetBoost: 100.25,
        CloseRangeSensitivityBoost: 100.9,

        EnableAdvancedEnemyTactics: true,
        EnemyAwarenessLevel: 0.85,
        PredictiveMovement: 1.0,
        AggressionMultiplier: 1.20,
        UseCoverEffectively: true,
        EvadeProjectiles: true,
        FlankPlayer: 0.70,
        PrioritizeHeadshot: true,
        TeamCoordination: true,
        AdaptiveDifficulty: true,
        AmbushProbability: 0.40,
        RetreatThreshold: 0.25,
        MaxPursuitDistance: 10.0,

        TrackEnemyHead: true,
        TrackEnemyNeck: true,
        TrackEnemyChest: true,
        TrackEnemyRotation: true,
        TrackEnemyVelocity: true,
        TrackCameraRelative: true,
        SnapToBoneAngle: 360.0,
        RotationLockStrength: 999.0,

        UseKalmanFilter: true,
        KalmanPositionFactor: 0.85,
        KalmanVelocityFactor: 0.88,
        NoiseReductionLevel: 0.65,
        JitterFixer: true,
        SmoothTracking: true,

        EnableDynamicGameBehavior: true,
        DynamicAimAdjustment: true,
        DynamicFireRate: true,
        AdaptiveLockPriority: true,
        ThreatAssessmentLevel: 0.85,
        CloseRangeBehaviorBoost: 1.20,
        LongRangeBehaviorPenalty: 0.75,
        LowHealthEnemyFocus: true,
        MultiTargetDistribution: true,
        DynamicFOVScaling: true,

        EnableDebugLogs: false,
        LogRealtimeData: false,
        ShowTargetFOV: false,
        ShowEnemyVectors: false
    };
   var config = {
        AutoTrackHead: true,
        BuffMultiplier: 3,
        HeadZoneWeight: 2.0,
        EnableLockOn: true,
        LockStrength: 8,
        AutoAimAssist: true,
        TouchSnap: true,
        HeadshotBias: 999.5,
        PriorityZone: "Head",
        RecoilControl: "Enhanced",
        StickyTarget: true,
        MaxSnapLimit: 2.0,
        OvershootFix: true,
        QuickScopeReactionTime: 3,
        RealTimeMovementAimSync: 3,
        SmartTapFireOptimization: 3,
        LowDragFlickMode: 3,
        FeatherTouchAimingSystem: 3,
        AutoFocusTargetAssist: 3,
        DynamicAimFlowControl: 3,
        FastAimLockOnAssist: 3,
        MinimalWeightAimTuning: 3,
        QuickLightAimReset: 3,
        tapDelayReducer: 3,
        virtualKeyResponseFix: true,
        uiLatencyFix: true,
        screenResponseMap: 3,
        tapEventScheduler: 3,
        touchSyncFix: true,
        buttonFeedbackFix: true,
        delayToleranceTune: 3,
        tapQueueOptimize: 3,
        recoilDamping: 3,
        recoilControlFactor: 3,
        recoilPatternFix: true,
        antiRecoilMod: 9999,
        adsRecoilStabilizer: 9999,
        aimRecoilSuppress: true,
        recoilSmoothZone: 3,
        burstRecoilFix: true,
        recoilImpulseBalance: 3,
        adsRecoilCurve: 3,
        renderScale: 3,
        frameRateTarget: 3,
        graphicsPolicy: 3,
        uiFrameSkip: 3,
        animationReduce: 3,
        lowLatencyMode: 3,
        displayFrameHook: 3,
        shaderOptimize: 3,
        gpuThrottleBypass: true,
        renderThreadControl: 3,
        touchSensitivity: 3,
        inputPriority: 3,
        touchZonePrecision: 3,
        gestureTracking: 3,
        tapOptimization: 3,
        inputLagFix: 3,
        adsSensitivityBoost: true,
        aimDragResponse: 3,
        responseTimeOptimizer: 3,
        thermalPolicy: 3,
        cpuBoost: true,
        gpuBoost: true,
        thermalBypass: true,
        batterySaverDisable: 3,
        fpsUncap: 3,
        vsyncBypass: true,
        ultraLightMode: true,
        lowResourceMode: true,
        sensitivity: 8.4,
        aimSmoothnessNear: 0.999999995,
        aimSmoothnessFar: 0.9999999995,
        jitterRange: 0.0,
        recoilCurve: 0.000000015,
        recoilDecay: 0.9999999995,
        triggerFireChance: 1.0,
        aimFov: 360,
        frameRateControl: 144,
        dynamicFrameSkip: 0.55,
        headLockThreshold: 0.0015,
        recoilResetThreshold: 0.00005,
        recoilMaxLimit: 0.0,
        superHeadLock: 5.0,
        lockOnDelay: 0,
        tracking: {
            default: { speed: 2.0, pullRate: 1.0, headBias: 10.0, closeBoost: 10.0 },
            mp40: { speed: 20.0, pullRate: 0.55, headBias: 16.0, closeBoost: 14.0 },
            thompson: { speed: 24.0, pullRate: 0.55, headBias: 15.0, closeBoost: 12.0 },
            ump: { speed: 23.0, pullRate: 0.55, headBias: 15.0, closeBoost: 12.0 },
            m1887: { speed: 999.0, pullRate: 9999.1, headBias: 16.0, closeBoost: 994.0 },
            m1014: { speed: 17.0, pullRate: 1.1, headBias: 15.0, closeBoost: 13.0 },
            spas12: { speed: 22.0, pullRate: 1.0, headBias: 15.0, closeBoost: 12.0 }
        },
        weaponProfiles: {
            default: { sensitivity: 1.25, recoil: { x: 0.002, y: 0.05 }, fireRate: 600 },
            mp40: { sensitivity: 1.45, recoil: { x: 0.002, y: 0.01 }, fireRate: 850 },
            thompson: { sensitivity: 1.45, recoil: { x: 0.002, y: 0.007 }, fireRate: 800 },
            ump: { sensitivity: 1.45, recoil: { x: 0.002, y: 0.005 }, fireRate: 750 },
            m1887: { sensitivity: 100.35, recoil: { x: 0.01, y: 0.09 }, fireRate: 200 },
            m1014: { sensitivity: 1.35, recoil: { x: 0.01, y: 0.085 }, fireRate: 220 },
            spas12: { sensitivity: 1.3, recoil: { x: 0.01, y: 0.08 }, fireRate: 210 }
        }
    };



  var lastAim = { x: 0, y: 0 };
  var recoilOffset = { x: 0, y: 0 };
  var lastUpdateTime = 0;
  var lastFireTime = 0;
  var lastLockTime = 0;
  var bulletHistory = [];

  var dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  var smooth = (v, p, a) => a * v + (1 - a) * p;
  var randomJitter = () => (Math.random() - 0.5) * config.jitterRange * 2;
  var antiJitterFilter = j => j * 0.003;

var GamePackages = {
  GamePackage1: "com.dts.freefireth",
  GamePackage2: "com.dts.freefiremax"
};
// =============================================================
//  AIMBOT_CD (có Kalman Lite) – phiên bản PAC-safe
// =============================================================
var AIMBOT_CD = {

    Vec3: function (x, y, z) { 
        return { x: x || 0, y: y || 0, z: z || 0 }; 
    },

    add: function (a, b) { 
        return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z }; 
    },

    sub: function (a, b) { 
        return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z }; 
    },

    mul: function (a, m) { 
        return { x: a.x * m, y: a.y * m, z: a.z * m }; 
    },

    KalmanLite: function () {
        return {
            q: 0.002,
            r: 0.03,
            x: 0,
            p: 1,
            k: 0,
            update: function (m) {
                this.p += this.q;
                this.k = this.p / (this.p + this.r);
                this.x = this.x + this.k * (m - this.x);
                this.p = this.p * (1 - this.k);
                return this.x;
            }
        };
    },

    KX: null,
    KY: null,
    KZ: null,

    Init: function () {
        this.KX = this.KalmanLite();
        this.KY = this.KalmanLite();
        this.KZ = this.KalmanLite();
    },

    Config: {
        ReactionTime: 1,
        RealTimeMovementSync: 1,
        SmartTapFire: 1,
        LowDragFlick: 1,
        FeatherTouchAim: 1,
        AutoFocusAssist: 1,
        DynamicFlowControl: 1,
        FastAimLockOn: 1,
        MinimalWeightTuning: 1,
        QuickLightReset: 1,

        RealTimeSensitivityAdjust: 1,
        DynamicTouchScaling: 1,
        CrosshairFluidity: 1,
        InteractiveSensitivity: 1,
        CustomScopeSensitivity: 1,
        PrecisionDragSpeed: 1,
        ZoomSensitivity: 1,
        MotionSensitivityBoost: 1,
        SmartGyroCalib: 1,
        QuickSensitivityReset: 1
    },

    ComputeLock: function (enemy) {

        if (!enemy || !enemy.head) return this.Vec3(0,0,0);

        var pos = enemy.head;

        var sx = this.KX.update(pos.x);
        var sy = this.KY.update(pos.y);
        var sz = this.KZ.update(pos.z);

        var smooth = this.Vec3(sx, sy, sz);

        if (this.Config.FeatherTouchAim === 1)
            smooth = this.mul(smooth, 1.02);

        if (this.Config.FastAimLockOn === 1)
            smooth.y = smooth.y + 0.004;

        return smooth;
    },

    CD_AIM: function (enemyData) {
        if (!this.KX) this.Init();
        if (!enemyData) return null;

        var out = null;
        out = this.ComputeLock(enemyData);

        return out;
    }
};


// =============================================================
//  UltraCD – siêu dính đầu
// =============================================================
var UltraCD = {

    Vec3: function (x, y, z) { return { x: x, y: y, z: z }; },

    CD_Strength: 1.0,
    CD_Gravity: 1.0,
    CD_AutoLift: 1.0,
    CD_Stickiness: 1.0,
    CD_VerticalFix: 1.0,
    CD_HorizontalFix: 1.0,
    CD_AngleLimit: 360.0,
    CD_Predict: 1.0,

    UltraCD_AIM: function (enemy) {
        if (!enemy || !enemy.head) return this.Vec3(0,0,0);

        var h = enemy.head;

        h.x = h.x * this.CD_Strength;
        h.y = h.y * (this.CD_Strength + this.CD_AutoLift);
        h.z = h.z * this.CD_Strength;

        return h;
    }
};


// =============================================================
// RealTimeAIM – mượt + snap nhẹ
// =============================================================
var RealTimeAIM = {

    lastPos: { x: 0, y: 0, z: 0 },
    smooth: 0.90,
    snap: 1.0,

    update: function (head) {

        var dx = head.x - this.lastPos.x;
        var dy = head.y - this.lastPos.y;
        var dz = head.z - this.lastPos.z;

        head.x = this.lastPos.x + dx * this.smooth;
        head.y = this.lastPos.y + dy * this.smooth;
        head.z = this.lastPos.z + dz * this.smooth;

        head.y = head.y + this.snap;
        head.x = head.x * (1 + this.snap * 0.2);

        this.lastPos = { x: head.x, y: head.y, z: head.z };

        return head;
    }
};
//
//  ====== ENHANCED DRAG & HEADLOCK SYSTEM FOR PAC ======
//  Tất cả module được gộp lại full PAC-compatible
//

var localPlayer = {
    isDragging: false,
    crosshair: {
        position: { x: 0, y: 0, z: 0 },
        lockedBone: null
    }
};

var HeadLockAim = {
    currentTarget: null
};

//
//  ------ 1. NoOverHeadDrag ------
//
var NoOverHeadDrag = {
    enabled: true,
    headBone: "bone_Head",
    clampYOffset: 0.0,

    boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
    rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
    scale: { x: 1.0, y: 1.0, z: 1.0 },

    apply: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        var aimPos = player.crosshair.position;
        var headPos = enemy.getBonePosition(this.headBone);

        if (aimPos.y > headPos.y + this.clampYOffset) {
            player.crosshair.position = {
                x: aimPos.x,
                y: headPos.y + this.clampYOffset,
                z: aimPos.z
            };
        }
    }
};

//
//  ------ 2. DragHeadLockStabilizer ------
//
var DragHeadLockStabilizer = {
    enabled: true,
    headBone: "bone_Head",

    boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
    rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
    scale: { x: 1.0, y: 1.0, z: 1.0 },

    lockZone: {
        toleranceX: 0.0,
        toleranceY: 0.0
    },

    stabilize: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        var aimPos = player.crosshair.position;
        var headPos = enemy.getBonePosition(this.headBone);

        var dx = Math.abs(aimPos.x - headPos.x);
        var dy = Math.abs(aimPos.y - headPos.y);

        if (dx < this.lockZone.toleranceX && dy < this.lockZone.toleranceY) {
            player.crosshair.position = {
                x: headPos.x,
                y: headPos.y,
                z: headPos.z
            };

            player.crosshair.lockedBone = this.headBone;
        }
    }
};

//
//  ------ 3. SmartBoneAutoHeadLock ------
//
var SmartBoneAutoHeadLock = {
    enabled: true,
    mode: "aggressive",

    triggerBones: [
        "bone_LeftClav",
        "bone_RightClav",
        "bone_Neck",
        "bone_Hips"
    ],

    headBone: "bone_Head",

    boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
    rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
    scale: { x: 1.0, y: 1.0, z: 1.0 },

    // Normal config
    lockTolerance: 0.02,
    maxYOffset: 0.0,
    maxRotationDiff: 0.001,
    maxOffsetDiff: 0.0001,

    // Aggressive override
    aggressive: {
        lockTolerance: 0.0001,
        maxYOffset: 0.0,
        maxRotationDiff: 0.001,
        maxOffsetDiff: 0.001
    },

    checkAndLock: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        var cfg = (this.mode === "aggressive") ? this.aggressive : this;

        var aimPos = player.crosshair.position;
        var headPos = enemy.getBonePosition(this.headBone);
        var headData = enemy.getBoneData(this.headBone);

        for (var i = 0; i < this.triggerBones.length; i++) {
            var bone = this.triggerBones[i];
            var bonePos = enemy.getBonePosition(bone);
            var boneData = enemy.getBoneData(bone);

            var offsetDiff =
                Math.sqrt(
                    (bonePos.x - headPos.x) * (bonePos.x - headPos.x) +
                    (bonePos.y - headPos.y) * (bonePos.y - headPos.y) +
                    (bonePos.z - headPos.z) * (bonePos.z - headPos.z)
                );

            var dot =
                headData.rotation.x * boneData.rotation.x +
                headData.rotation.y * boneData.rotation.y +
                headData.rotation.z * boneData.rotation.z +
                headData.rotation.w * boneData.rotation.w;

            var rotationDiff = 1 - Math.abs(dot);

            var dx = Math.abs(aimPos.x - bonePos.x);
            var dy = Math.abs(aimPos.y - bonePos.y);

            if (
                dx < cfg.lockTolerance &&
                dy < cfg.lockTolerance &&
                offsetDiff < cfg.maxOffsetDiff &&
                rotationDiff < cfg.maxRotationDiff
            ) {
                var clampedY =
                    (aimPos.y + cfg.maxYOffset < headPos.y)
                        ? aimPos.y + cfg.maxYOffset
                        : headPos.y;

                player.crosshair.position = {
                    x: headPos.x,
                    y: clampedY,
                    z: headPos.z
                };

                player.crosshair.lockedBone = this.headBone;
                return;
            }
        }
    }
};

// ===============================
//  BulletDeviationCorrector
//  Fix lỗi "tâm đúng đầu nhưng đạn lệch"
// ===============================
var BulletDeviationCorrector = {

    Enabled: true,

    // ===== CÁC HỆ SỐ HIỆU CHỈNH =====
    CorrectionStrength: 1.0,           // mức độ kéo tâm bù lệch
    VerticalBias: 0.0025,              // bù lệch đạn bay thấp (headshot không ăn)
    HorizontalBias: 0.0015,            // bù lệch trái/phải
    Stability: 0.0,                   // mượt khi sửa (0 = cứng, 1 = mềm)

    // ===== NGĂN ĐẠN VƯỢT QUÁ HEAD =====
    MaxCorrectionAngle: 360.0,           // chỉ hiệu chỉnh khi lệch < 4.5°
    OvershootDamping: 1.0,            // giảm rung khi bù quá tay

    // ===== ĐỘ LỆCH CƠ BẢN THEO GAME =====
    WeaponBaseSpread: 0.001,           // tản đạn tự nhiên
    FireKickFactor: 0.002,             // tản đạn khi spam fire

    // ===============================
    //  MAIN FUNCTION – Áp vào vị trí head
    // ===============================
    applyCorrection: function(mockHead, player, weaponState) {
        if (!this.Enabled) return mockHead;

        // --- Tính hướng từ mắt -> đầu ---
        var dx = mockHead.x - player.x;
        var dy = mockHead.y - player.y;
        var dz = mockHead.z - player.z;

        var dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (dist < 0.01) return mockHead;

        // --- Góc lệch nhỏ để xác định cần sửa ---
        var angleError = Math.abs(dy) + Math.abs(dx);

        if (angleError > this.MaxCorrectionAngle) {
            // lệch quá nhiều, không sửa để tránh giật
            return mockHead;
        }

        // ====== TÍNH ĐỘ LỆCH CHUẨN ======
        var spread = this.WeaponBaseSpread;

        if (weaponState && weaponState.isFiring) {
            spread += this.FireKickFactor;
        }

        // ====== ÁP DỤNG BÙ LỆCH ======
        var cx = dx + (this.HorizontalBias * spread * this.CorrectionStrength);
        var cy = dy + (this.VerticalBias   * spread * this.CorrectionStrength);
        var cz = dz;

        // ====== MỀM HÓA ======
        cx = (cx * this.Stability) + (dx * (1 - this.Stability));
        cy = (cy * this.Stability) + (dy * (1 - this.Stability));
        cz = (cz * this.Stability) + (dz * (1 - this.Stability));

        // ====== CHỐNG OVERSHOOT ======
        cx *= this.OvershootDamping;
        cy *= this.OvershootDamping;

        // ====== TRẢ LẠI TOẠ ĐỘ MỚI ======
        return {
            x: player.x + cx,
            y: player.y + cy,
            z: player.z + cz
        };
    }
};
//
//  ------ MASTER UPDATE FUNCTION ------
//  (bạn gọi function này trong vòng lặp chính)
//
function updateDragSystems(player, target) {
    if (!player.isDragging) return;

    if (NoOverHeadDrag.enabled) {
        NoOverHeadDrag.apply(player, target);
    }
    if (DragHeadLockStabilizer.enabled) {
        DragHeadLockStabilizer.stabilize(player, target);
    }
    if (SmartBoneAutoHeadLock.enabled) {
        SmartBoneAutoHeadLock.checkAndLock(player, target);
    }
}



// =============================================================
// PAC – PROXY + AIM ENGINE
// =============================================================
function FindProxyForURL(url, host) {

    // =========================
    // Helpers: vector + math
    // =========================
    function vec(x, y, z) { return { x: x || 0, y: y || 0, z: z || 0 }; }
    function vec2(x, y) { return { x: x || 0, y: y || 0 }; }

    function vAdd(a, b) { return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z }; }
    function vSub(a, b) { return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z }; }
    function vMag(a) { return Math.sqrt((a.x*a.x) + (a.y*a.y) + (a.z*a.z)); }
    function vNorm(a) {
        var m = vMag(a);
        if (m < 0.000001) return vec(0,0,0);
        return { x: a.x / m, y: a.y / m, z: a.z / m };
    }
    function vDist2D(a,b) {
        var dx = (a.x||0) - (b.x||0);
        var dy = (a.y||0) - (b.y||0);
        return Math.sqrt(dx*dx + dy*dy);
    }
    function vMove2D(src, dst, t) {
        // t in [0,1]
        return {
            x: src.x + (dst.x - src.x) * t,
            y: src.y + (dst.y - src.y) * t
        };
    }

    // ================================
    // KALMAN LITE (internal)
    // ================================
    function KalmanLite() {
        return {
            q: 0.01,
            r: 0.2,
            x: 0,
            p: 1,
            k: 0,
            filter: function(m) {
                this.p += this.q;
                this.k = this.p / (this.p + this.r);
                this.x = this.x + this.k * (m - this.x);
                this.p = (1 - this.k) * this.p;
                return this.x;
            }
        };
    }

    // ================================
    // Default / safe configs (if not provided externally)
    // ================================
    if (typeof config === "undefined") {
        var config = {
            HeadZoneWeight: 1.2,
            LockStrength: 1.1,
            tracking: true,
            autoFire: true
        };
    }

    if (typeof FreeFireConfig === "undefined") {
        var FreeFireConfig = {
            autoHeadLock: { enabled: true, lockOnFire: true, holdWhileMoving: true },
            hipSnapToHead: { enabled: true, instant: true },
            autoAimOnFire: { enabled: true, snapForce: 0.85 },
            perfectHeadshot: { enabled: true, prediction: true },
            stabilizer: { enabled: true, antiShake: true },
            forceHeadLock: { enabled: true },
            aimSensitivity: { enabled: true, base: 1.0, distanceScale: true, closeRange: 1.2, longRange: 0.8, lockBoost: 1.0 }
        };
    }

    // If other modules not defined externally, create minimal stubs so PAC won't crash
    if (typeof AIMBOT_CD === "undefined") {
        var AIMBOT_CD = {
            Vec3: function(x,y,z){ return vec(x,y,z); },
            CD_AIM: function() { return null; }
        };
    }
    if (typeof UltraCD === "undefined") {
        var UltraCD = { UltraCD_AIM: function() { return null; } };
    }
    if (typeof RealTimeAIM === "undefined") {
        var RealTimeAIM = { update: function() {} };
    }
    if (typeof SteadyHoldSystem === "undefined") {
        var SteadyHoldSystem = { Enabled: false, SteadyStrength: 1.0 };
    }
    if (typeof LightHeadDragAssist === "undefined") {
        var LightHeadDragAssist = { Enabled: false, BoneHeadOffsetTrackingLock: vec(-0.0456970781,-0.004478302,-0.0200432576), HeadBiasStrength:1.0, KalmanFactor:0.0 };
    }
    if (typeof HardLockSystem === "undefined") {
        var HardLockSystem = { enabled: false, coreLock: { hardLockStrength: 1.0 }, hyperHeadLock: { enabled: false, boneOffset: vec(0,0,0) } };
    }
    if (typeof ScreenTouchSens === "undefined") {
        var ScreenTouchSens = { EnableScreenSensitivity: false, BaseTouchScale:1.0, DynamicTouchBoost:0.0, MicroControlStrength:1.0, FineTrackingAssist:1.0 };
    }
    if (typeof HeadfixSystem === "undefined") {
        var HeadfixSystem = { EnableHeadFix:false, HeadLockBias:1.0, HeadStickStrength:1.0, MicroCorrection:false, MicroCorrectionStrength:1.0, AntiSlipNeck:false, AntiSlipStrength:1.0, HeadGravity:1.0, VerticalHeadFix:1.0, HorizontalStabilizer:1.0 };
    }
    if (typeof DefaultNeckAimAnchor === "undefined") {
        var DefaultNeckAimAnchor = { Enabled:false, NeckOffset: vec(0,0,0) };
    }
    if (typeof HeadTracking === "undefined") {
        var HeadTracking = { LockStrength:1.0, PredictionFactor:0.0, HeadLeadTime:0.0 };
    }
    if (typeof AimLockSystem === "undefined") {
        var AimLockSystem = { applyAimLock: function(){}, EnableAimLock:false };
    }

    // ================================
    // AimNeckConfig (safe)
    // ================================
    var AimNeckConfig = {
        name: "AimNeckSystem",
        enabled: false,
        config: {
            sensitivity: 1.0,
            lockSpeed: 1.0,
            prediction: true,
            tracking: true,
            fov: 360,
            autoFire: false,
            aimBone: "bone_Neck",
            headAssist: true,
            screenTapEnabled: true,
            clamp: { minY: -9999, maxY: 9999 },
            boneOffset: { x: 0, y: 0.22, z: 0 }
        }
    };

    // ================================
    // Race config (safe)
    // ================================
    var RaceConfig = {
        raceName: "BaseMale",
        headBone: "bone_Head",
        bodyBones: ["bone_Chest","bone_Spine","bone_Legs","bone_Feet"],
        sensitivity: 1.0,
        height: 1.75,
        radius: 0.25,
        mass: 50.0
    };

    // ================================
    // AIM SYSTEM (lightweight)
    // ================================
    var AimSystem = {
        getBonePos: function(enemy, bone) {
            if (!enemy || !enemy.bones) return vec(0,0,0);
            return enemy.bones[bone] || vec(0,0,0);
        },

        lockToHead: function(player, enemy) {
            var head = this.getBonePos(enemy, RaceConfig.headBone);
            var dir = vNorm(vSub(head, player.position));
            player.crosshairDir = dir;
        },

        applyRecoilFix: function(player) {
            var fix = 0.1;
            player.crosshairDir = vNorm(vAdd(player.crosshairDir, vec(0,-fix,0)));
        },

        adjustDrag: function(player, targetBone) {
            var sens = 1.0;
            if (targetBone === "head") sens *= 1.0;
            if (targetBone === "body") sens *= 1.0;
            player.dragForce = sens;
        },

        // Neck helpers (adapted to PAC style, no ES6)
        detectNeckTarget: function(enemies) {
            var out = [];
            for (var i=0;i<enemies.length;i++) {
                var e = enemies[i];
                if (e && e.isVisible && e.health > 0) {
                    var base = (e.bones && e.bones[AimNeckConfig.config.aimBone]) ? e.bones[AimNeckConfig.config.aimBone] : e.position || vec(0,0,0);
                    out.push({ enemy: e, neckPos: base });
                }
            }
            return out;
        },

        getBonePosition: function(enemy, bone) {
            var base = (enemy.bones && enemy.bones[bone]) ? enemy.bones[bone] : enemy.position || vec(0,0,0);
            return {
                x: base.x + AimNeckConfig.config.boneOffset.x,
                y: base.y + AimNeckConfig.config.boneOffset.y,
                z: base.z + AimNeckConfig.config.boneOffset.z
            };
        },

        predictNeckPosition: function(target) {
            var velocity = (target.enemy && target.enemy.velocity) ? target.enemy.velocity : { x:0, y:0, z:0 };
            return {
                x: target.neckPos.x + velocity.x * 0.1,
                y: target.neckPos.y + velocity.y * 0.1,
                z: target.neckPos.z + velocity.z * 0.1
            };
        },

        calculateAimDirection: function(playerPos, targetPos) {
            return { x: targetPos.x - playerPos.x, y: targetPos.y - playerPos.y, z: targetPos.z - playerPos.z };
        },

        screenTapTo: function(targetPos) {
            // PAC cannot touch screen — mark moved flag
            if (targetPos) targetPos.moved = true;
        },

        applyAimLock: function(direction) {
            // PAC: mock apply
            return direction;
        },

        run: function(player, enemies) {
            if (!this.enabled) return;
            var targets = this.detectNeckTarget(enemies);
            if (targets.length === 0) return;

            var target = targets[0];
            var lockPos = (this.config.prediction) ? this.predictNeckPosition(target) : target.neckPos;
            var dir = this.calculateAimDirection(player.position, lockPos);

            if (this.config.headAssist) {
                if (dir.y > this.config.clamp.maxY) dir.y = this.config.clamp.maxY;
                if (dir.y < this.config.clamp.minY) dir.y = this.config.clamp.minY;
            }

            this.applyAimLock(dir);
            this.screenTapTo(lockPos);
        },

        enabled: AimNeckConfig.enabled,
        config: AimNeckConfig.config
    };

    var HeadAntiDrop = {
    enabled: true,
    headBone: "bone_Head",
    lockTolerance: 0.018,     // độ lệch cho phép để xem như “đã dính đầu”
    clampYOffset: 0.0,        // không cho rớt dưới đầu
    isHeadLocked: false       // trạng thái đã dính đầu
};
function checkHeadLockState(cross, headPos) {
    var dx = abs(cross.x - headPos.x);
    var dy = abs(cross.y - headPos.y);

    if (dx < HeadAntiDrop.lockTolerance && dy < HeadAntiDrop.lockTolerance) {
        HeadAntiDrop.isHeadLocked = true;
    }
}
function antiDropHold(cross, headPos) {

    if (!HeadAntiDrop.enabled) return;
    if (!HeadAntiDrop.isHeadLocked) return;

    // nếu y của crosshair < y của head → kéo lên head
    if (cross.y < headPos.y + HeadAntiDrop.clampYOffset) {
        cross.y = headPos.y + HeadAntiDrop.clampYOffset;
    }
}
// =======================================
//  AUTO RE-AIM TO HEAD WHEN AIM WRONG
// =======================================

var AutoReAim = {
    enable: 1,                 // Bật/Tắt hệ thống
    correctionSpeed: 1.85,     // Tốc độ kéo lại về head
    smooth: 0.82,              // Độ mượt tránh snap quá mạnh
    maxYOffset: 0.12,          // Y cho phép lệch tối đa trước khi kéo lại
    lockZoneMultiplier: 1.55,  // Độ ưu tiên vùng head
};


// Hàm chính xác định có đang aim sai vị trí không
function isNotHeadHit(hitBoxName) {
    if (!hitBoxName) return true;

    return !(
        hitBoxName === "Head" ||
        hitBoxName === "head" ||
        hitBoxName === "Bone_Head" ||
        hitBoxName === "Face" ||
        hitBoxName === "Skull"
    );
}


// Tạo vector kéo lại đầu
function reAimToHeadVector(target) {
    if (!target || !target.headPos) return { x: 0, y: 0, z: 0 };

    return {
        x: target.headPos.x,
        y: target.headPos.y,
        z: target.headPos.z
    };
}


// ============================
//  MODULE CHÍNH GẮN VÀO findproxy
// ============================

function AutoReAimHeadSystem(target, currentHitBox, crosshairPos) {
    if (!AutoReAim.enable) return crosshairPos;

    // Nếu đang aim vào vùng không phải đầu → sửa lại
    if (isNotHeadHit(currentHitBox)) {

        var head = reAimToHeadVector(target);

        // Tính vector kéo về head
        var fixX = (head.x - crosshairPos.x) * AutoReAim.correctionSpeed;
        var fixY = (head.y - crosshairPos.y) * AutoReAim.correctionSpeed * AutoReAim.lockZoneMultiplier;

        // Giảm snap mạnh → mượt hơn
        fixX *= AutoReAim.smooth;
        fixY *= AutoReAim.smooth;

        // Giới hạn kéo quá đà
        if (Math.abs(fixY) > AutoReAim.maxYOffset) {
            fixY = AutoReAim.maxYOffset * (fixY > 0 ? 1 : -1);
        }

        return {
            x: crosshairPos.x + fixX,
            y: crosshairPos.y + fixY,
            z: crosshairPos.z
        };
    }

    return crosshairPos;
}
var HeadAntiDropSystem = {
    enabled: true,
    headBone: "bone_Head",

    // Strong Anti-Drop
    strongMode: true,        // y <= head → kéo lên ngay
    clampYOffset: 0.0,       // không cho vượt đầu

    // Head Gravity Cancel
    gravityCancelStrength: 1.0,

    // Vertical Stick Boost (kéo Y mạnh hơn X)
    verticalBoost: 1.65,
    verticalBoostActive: false,

    // Predictive AntiDrop
    predictiveStrength: 1.0,
    predictSamples: 3,

    // Lock state
    isHeadLocked: false,
    lockTolerance: 0.016
};

// Lưu velocity Y
var headVelBuffer = [];

function updateHeadVelocity(y) {
    headVelBuffer.push(y);
    if (headVelBuffer.length > HeadAntiDropSystem.predictSamples) {
        headVelBuffer.shift();
    }
}

function getPredictedHeadY() {
    if (headVelBuffer.length < 2) return null;

    var last = headVelBuffer[headVelBuffer.length - 1];
    var prev = headVelBuffer[headVelBuffer.length - 2];
    var vel = (last - prev);

    return last + vel * HeadAntiDropSystem.predictiveStrength;
}

function checkHeadLock(cross, head) {
    var dx = abs(cross.x - head.x);
    var dy = abs(cross.y - head.y);

    if (dx < HeadAntiDropSystem.lockTolerance &&
        dy < HeadAntiDropSystem.lockTolerance) 
    {
        HeadAntiDropSystem.isHeadLocked = true;
        HeadAntiDropSystem.verticalBoostActive = true;
    }
}

// Core Anti-Drop
function applyAntiDrop(cross, headY) {

    if (!HeadAntiDropSystem.enabled) return;
    if (!HeadAntiDropSystem.isHeadLocked) return;

    // Predictive AntiDrop
    var predictedY = getPredictedHeadY();
    if (predictedY != null) {
        headY = predictedY;
    }

    // 1. Strong Anti-Drop — y <= head → kéo lên ngay
    if (HeadAntiDropSystem.strongMode) {
        if (cross.y <= headY) {
            cross.y = headY + HeadAntiDropSystem.clampYOffset;
        }
    }

    // 2. Head Gravity Cancel
    var diff = (headY - cross.y);
    if (diff > 0) {
        cross.y += diff * HeadAntiDropSystem.gravityCancelStrength;
    }

    // 3. Vertical Stick Boost
    if (HeadAntiDropSystem.verticalBoostActive) {
        cross.y += (headY - cross.y) * HeadAntiDropSystem.verticalBoost;
    }
}

var UltraMagneticHeadLock = {
    enabled: true,
    headBone: "bone_Head",

    // Lực hút nam châm
    baseMagnetPower: 2.4,
    distanceBoost: 1.2,
    errorBoost: 2.0,

    // Phạm vi để bật nam châm
    magnetRadius: 0.075,

    // Tăng lực khi enemy xoay nhanh
    rotationBoostFactor: 1.5,

    // Khi đã hút → tăng lực giữ
    stickWhenLocked: true,
    lockStickStrength: 2.2,

    // Lock state
    headLocked: false,

    // kiểm tra lock
    checkLock: function(cross, head) {
        var dx = abs(cross.x - head.x);
        var dy = abs(cross.y - head.y);
        var dist = sqrt(dx*dx + dy*dy);

        if (dist < this.magnetRadius) {
            this.headLocked = true;
        }
    },

    apply: function(player, enemy) {
        if (!this.enabled || !enemy.isAlive) return;

        var head = enemy.getBone(this.headBone);
        var cross = Crosshair;

        this.checkLock(cross, head);

        var dx = head.x - cross.x;
        var dy = head.y - cross.y;

        var distance = sqrt(dx*dx + dy*dy);
        if (distance > this.magnetRadius) return;

        // Lực hút theo sai số vị trí
        var errorForce = distance * this.errorBoost;

        // Lực hút theo khoảng cách giữa player và enemy
        var dist3D = enemy.distanceTo(player);
        var distForce = dist3D * this.distanceBoost;

        // Lấy tốc độ xoay enemy
        var rot = enemy.getBoneRotation(this.headBone);
        var rotationForce = (abs(rot.x) + abs(rot.y) + abs(rot.z)) * this.rotationBoostFactor;

        // Tổng lực nam châm
        var magnetPower =
            this.baseMagnetPower +
            errorForce +
            distForce +
            rotationForce;

        // Nếu đã lock → stick mạnh hơn
        if (this.headLocked && this.stickWhenLocked) {
            magnetPower *= this.lockStickStrength;
        }

        // Áp dụng lực hút
        cross.x += dx * magnetPower;
        cross.y += dy * magnetPower;
    }
};
var HeadRotationCompensation = {
    enabled: true,
    headBone: "bone_Head",

    rotationSensitivity: 1.4,
    maxCompensation: 0.012,

    previousRotation: {x:0,y:0,z:0,w:1},

    apply: function(enemy) {
        if (!this.enabled || !enemy.isAlive) return;

        var cross = Crosshair;
        var current = enemy.getBoneRotation(this.headBone);

        // Sai số quaternion
        var dx = current.x - this.previousRotation.x;
        var dy = current.y - this.previousRotation.y;
        var dz = current.z - this.previousRotation.z;

        // Độ xoay → dịch chuyển điểm mặt
        var compensationX = clamp(dx * this.rotationSensitivity, -this.maxCompensation, this.maxCompensation);
        var compensationY = clamp(dy * this.rotationSensitivity, -this.maxCompensation, this.maxCompensation);

        cross.x += compensationX;
        cross.y += compensationY;

        // Lưu trạng thái xoay
        this.previousRotation = current;
    }
};
var HeadMicroPredict = {
    enabled: true,
    headBone: "bone_Head",

    predictStrength: 0.012,   // độ dự đoán micro
    maxPredict: 0.009,        // giới hạn an toàn

    previous: {x:0,y:0,z:0,w:1},
    lastTime: 0,

    apply: function(player, enemy) {
        if (!this.enabled || !enemy.isAlive) return;

        var cross = Crosshair;
        var rot = enemy.getBoneRotation(this.headBone);

        var now = system.time();
        var dt = now - this.lastTime;
        if (dt <= 0.0) dt = 0.016;

        // quaternion delta
        var dx = (rot.x - this.previous.x) / dt;
        var dy = (rot.y - this.previous.y) / dt;

        // dx = enemy quay trái/phải
        // dy = enemy cúi/ngửa đầu

        var predictX = dx * this.predictStrength;
        var predictY = dy * this.predictStrength;

        predictX = clamp(predictX, -this.maxPredict, this.maxPredict);
        predictY = clamp(predictY, -this.maxPredict, this.maxPredict);

        cross.x += predictX;
        cross.y += predictY;

        this.previous = rot;
        this.lastTime = now;
    }
};
var AdvancedHeadAssist = {
    AntiSideSlipStrength: 0.65,
    MicroPredictGain: 0.35,
    BreakPredictShield: 0.5,
    AirborneStabilizerGain: 0.8,
    OverDragCorrectGain: 0.55,

    lastVel: {x:0,y:0,z:0},
    lastHead: {x:0,y:0,z:0},
    lastDirSign: 0,

    updateHeadLock: function(enemy, headPos, dt) {

        var vx = enemy.velocity.x;
        var vy = enemy.velocity.y;
        var vz = enemy.velocity.z;

        var dx = headPos.x - this.lastHead.x;
        var dz = headPos.z - this.lastHead.z;

        // -------------------------------
        // ⭐ 1. Anti-SideSlip (không trượt ngang)
        // Giảm sai lệch theo hướng X – Z
        // -------------------------------
        var sideSlipFixX = -(vx - this.lastVel.x) * this.AntiSideSlipStrength;
        var sideSlipFixZ = -(vz - this.lastVel.z) * this.AntiSideSlipStrength;

        headPos.x += sideSlipFixX;
        headPos.z += sideSlipFixZ;

        // -------------------------------
        // ⭐ 2. Head Micro-Predict (dự đoán micro xoay mặt)
        // -------------------------------
        var microX = dx * this.MicroPredictGain;
        var microZ = dz * this.MicroPredictGain;

        headPos.x += microX;
        headPos.z += microZ;

        // -------------------------------
        // ⭐ 3. Anti-Predict Break
        // chống enemy đổi hướng đột ngột
        // -------------------------------
        var dirNow = Math.sign(vx);
        if (dirNow !== this.lastDirSign && this.lastDirSign !== 0) {
            // Enemy đổi hướng nhanh → giảm tốc độ lock trong 60–120ms
            headPos.x = headPos.x * (1 - this.BreakPredictShield);
        }
        this.lastDirSign = dirNow;

        // -------------------------------
        // ⭐ 4. Airborne Head Stabilizer
        // giữ đầu khi enemy bật nhảy
        // -------------------------------
        if (vy > 0.25) {  
            headPos.y += vy * this.AirborneStabilizerGain;
        }

        // -------------------------------
        // ⭐ 5. Fix Drag Lố Đầu
        // khi drag vượt quá → kéo về đúng điểm
        // -------------------------------
        var diffY = headPos.y - this.lastHead.y;

        if (diffY > 0.045) { 
            // Drag lên quá nhanh → giảm
            headPos.y -= diffY * this.OverDragCorrectGain;
        }

        // Lưu lại cho frame tiếp theo
        this.lastVel.x = vx;
        this.lastVel.y = vy;
        this.lastVel.z = vz;

        this.lastHead.x = headPos.x;
        this.lastHead.y = headPos.y;
        this.lastHead.z = headPos.z;

        return headPos;
    }
};
// ================================
    // AutoHeadLock module (light)
    // ================================
    var AutoHeadLock = {
        kx: KalmanLite(),
        ky: KalmanLite(),
        kz: KalmanLite(),

        getBone: function(enemy, boneName) {
            if (!enemy || !enemy.bones) return vec(0,0,0);
            return enemy.bones[boneName] || vec(0,0,0);
        },

        detectClosestBone: function(player, enemy) {
            var min = 999999, closest = null;
            var allBones = [RaceConfig.headBone].concat(RaceConfig.bodyBones);
            for (var i=0;i<allBones.length;i++) {
                var b = allBones[i];
                var pos = this.getBone(enemy, b);
                var dist = vMag(vSub(pos, player.position));
                if (dist < min) { min = dist; closest = b; }
            }
            return closest;
        },

        detectTarget: function(enemies, playerPos) {
            var list = [];
            for (var i=0;i<enemies.length;i++) {
                var e = enemies[i];
                if (e && e.isVisible && e.health > 0) list.push(e);
            }
            // simple sort by distance to playerPos
            list.sort(function(a,b){
                var da = vMag(vSub((a.position||vec(0,0,0)), playerPos));
                var db = vMag(vSub((b.position||vec(0,0,0)), playerPos));
                return da - db;
            });
            return list;
        },

        lockTarget: function(target) {
            if (!target) return;
            var pos = this.getBone(target, RaceConfig.headBone);
            // mark locked (PAC mock)
            target.locked = true;
            target.lockPos = pos;
        },

        updateTargetPosition: function(target) {
            if (!target) return;
            var predicted = this.predictPosition(target);
            target.lockPos = predicted;
        },

        predictPosition: function(target) {
            var velocity = target.velocity || {x:0,y:0,z:0};
            return {
                x: target.position.x + velocity.x * 0.1,
                y: target.position.y + velocity.y * 0.1,
                z: target.position.z + velocity.z * 0.1
            };
        },

        applyHeadClamp: function(pos) {
            var off = (this.config && this.config.boneOffset) ? this.config.boneOffset : { x:0,y:0,z:0 };
            return { x: pos.x + off.x, y: pos.y + off.y, z: pos.z + off.z };
        },

        detectTargetSimple: function(enemies, playerPos) {
            // wrapper to keep naming consistent
            return this.detectTarget(enemies, playerPos);
        },

        // config used by AutoHeadLock
        config: { boneOffset: { x: 0, y: 0.0, z: 0 }, prediction: true }
    };

//
//  ===== HOLD CROSSHAIR ON HEAD WHEN FIRE =====
// ============================================
// ULTRA STICKY DRAG HEADLOCK
// Crosshair bám chặt đầu kẻ thù khi drag
// Không trượt – Không tụt – Theo velocity – Theo rotation
// ============================================

var UltraStickyDragHeadLock = {
    enabled: true,
    headBone: "bone_Head",

    // Độ nhạy hút đầu khi drag

    maxYOffset: 0.0,           // không cho phép vượt đầu
    maxSideSlip: 0.00001,      // chống lệch trái/phải
  
stickStrength: 1.5,
velocityPredictScale: 0.05,
rotationInfluence: 0.65,

    apply: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let aim = player.crosshair.position;
        let head = enemy.getBonePosition(this.headBone);
        let rot = enemy.getBoneRotation(this.headBone);
        let vel = enemy.velocity;

        // --- Predictive Head Movement (theo quán tính) ---
        let predictedHead = {
            x: head.x + vel.x * this.velocityPredictScale,
            y: head.y + vel.y * this.velocityPredictScale,
            z: head.z + vel.z * this.velocityPredictScale
        };

        // --- Anti-SideSlip (không trượt sang 2 bên) ---
        let dx = predictedHead.x - aim.x;
        if (Math.abs(dx) < this.maxSideSlip) dx = 0;

        // --- Anti-Drop (không tụt xuống cổ/ngực) ---
        let targetY = Math.min(predictedHead.y, head.y + this.maxYOffset);
        let dy = targetY - aim.y;

        // --- Head Rotation Compensation (giữ điểm mặt) ---
        let rotGain = (rot.x + rot.y + rot.z) * this.rotationInfluence;

        // --- Sticky Lock động ---
        player.crosshair.position = {
            x: aim.x + dx * this.stickStrength,
            y: aim.y + dy * this.stickStrength + rotGain,
            z: aim.z
        };

        player.crosshair.lockedBone = this.headBone;

        console.log("[UltraStickyDragHeadLock] 🎯 Bám đầu khi drag – không trượt, không tụt.");
    }
};

var AntiOverDragHeadFix = {
    enabled: true,

    // Head bone chuẩn
    headBone: "bone_Head",

    // Vùng giới hạn không được vượt (cao nhất = đầu enemy)
    maxYOffset: 0.0,       

    // Ngưỡng phát hiện drag nhanh
    fastDragSpeed: 0.015,     

    // Giảm tốc drag khi quá nhanh
    dragDamping: 0.65,        

    // Bù lệch khi enemy xoay mạnh
    rotationComp: 0.22,       

    // Bù velocity khi enemy chạy / strafing
    velocityPredict: 0.18,    

    // Theo dõi drag trước đó
    lastDragX: 0,
    lastDragY: 0,
    lastTime: Date.now(),

    apply(player, enemy) {
        if (!this.enabled || !enemy) return;

        let headPos = enemy.getBonePosition(this.headBone);
        let aimPos  = player.crosshair.position;

        // Tính speed drag
        let now = Date.now();
        let dt = (now - this.lastTime) || 1;

        let dx = aimPos.x - this.lastDragX;
        let dy = aimPos.y - this.lastDragY;

        let dragSpeed = Math.sqrt(dx*dx + dy*dy) / dt;

        this.lastTime = now;
        this.lastDragX = aimPos.x;
        this.lastDragY = aimPos.y;

        // --- 1) CLAMP Y – không bao giờ vượt đầu ---
        if (aimPos.y > headPos.y + this.maxYOffset) {
            aimPos.y = headPos.y;
        }

        // --- 2) GIẢM TỐC ĐỘ DRAG KHI QUÁ NHANH ---
        if (dragSpeed > this.fastDragSpeed) {
            aimPos.y = headPos.y + (aimPos.y - headPos.y) * this.dragDamping;
            aimPos.x = headPos.x + (aimPos.x - headPos.x) * this.dragDamping;
        }

        // --- 3) BÙ CHO XIÊN ĐẦU KHI ENEMY XOAY ---
        let rot = enemy.rotation || {x:0,y:0,z:0,w:1};
        aimPos.x += rot.y * this.rotationComp;
        aimPos.y += rot.x * this.rotationComp;

        // --- 4) BÙ CHO VELOCITY KHI ENEMY CHẠY ---
        if (enemy.velocity) {
            aimPos.x += enemy.velocity.x * this.velocityPredict;
            aimPos.y += enemy.velocity.y * this.velocityPredict;
        }

        // Gán lại crosshair
        player.crosshair.position = aimPos;

        console.log("[AntiOverDragHeadFix] ✔ Giữ headbox – Không vượt đầu, không tụt thân.");
    }
};

var HoldCrosshairOnHead = {
    enabled: true,
    headBone: "bone_Head",

    holdStrength: 1.0,     // lực giữ 1.0 = giữ tuyệt đối  ; 0.5 = giữ mềm
    maxDistance: 360.0,     // khoảng lệch tối đa để auto kéo lại
    fireHoldTime: 120,     // giữ tâm trong bao lâu sau khi bắn (ms)

    lastFireTime: 0,

    fireEvent: function() {
        // Cập nhật thời điểm bắn
        this.lastFireTime = Date.now();
    },
var HoldFire = {
    enabled: true,
    holdStrength: 1.35,        // độ bám khi giữ nút bắn
    velocityScale: 0.018,      // tỉ lệ bám theo vận tốc enemy
    predictionTime: 0.012,     // thời gian dự đoán vị trí đầu
},

    apply: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        // Nếu chưa bắn → không giữ
        var now = Date.now();
        if (now - this.lastFireTime > this.fireHoldTime) return;

        var aimPos = player.crosshair.position;
        var headPos = enemy.getBonePosition(this.headBone);

        // khoảng lệch
        var dx = headPos.x - aimPos.x;
        var dy = headPos.y - aimPos.y;
        var dz = headPos.z - aimPos.z;

        var dist = Math.sqrt(dx*dx + dy*dy + dz*dz);

        // nếu lệch xa quá → không giữ
        if (dist > this.maxDistance) return;

        // kéo tâm về đầu theo holdStrength
        player.crosshair.position = {
            x: aimPos.x + dx * this.holdStrength,
            y: aimPos.y + dy * this.holdStrength,
            z: aimPos.z + dz * this.holdStrength
        };
    }
};

    // aimlockScreenTap and aimlockLoop (global-scope style for PAC)
    function aimlockScreenTap(screenPos) {
        if (screenPos) screenPos.moved = true;
    }

    function aimlockLoop(enemies, player) {
        var targets = AutoHeadLock.detectTargetSimple(enemies, player.position);
        if (targets.length > 0) {
            var mainTarget = targets[0];
            AutoHeadLock.lockTarget(mainTarget);
            if (config.tracking) AutoHeadLock.updateTargetPosition(mainTarget);
            if (config.autoFire) mainTarget.autoFire = true;
        var targets = detect(enemies, player.position);
    if (targets.length == 0) return;

    var mainTarget = targets[0];

    var headPos = t.getBone("bone_Head");
    var cross = Crosshair;
updateHeadVelocity(head.y);

    // Kiểm tra đã dính head chưa
    checkHeadLock(cross, head);

    // Áp dụng hệ thống AntiDrop
    applyAntiDrop(cross, head.y);

    // 1) Kiểm tra đã lên đầu chưa
    checkHeadLockState(cross, headPos);

    // 2) Tính velocity + hold khi bắn
    holdCrosshairOnHead(t, isFiring);

    // 3) ANTI DROP – không bao giờ rớt xuống thân
    antiDropHold(cross, headPos);

    // lock đầu cơ bản
    lockTarget(mainTarget);

    // nếu giữ nút bắn → giữ đầu + bám velocity
    holdCrosshairOnHead(mainTarget, isFiring);
}
    }
function updateDragSystems(player, target) {
    if (!target) return;

    // Nếu bắn → giữ tâm tại đầu
    HoldCrosshairOnHead.apply(player, target);

    // Các module khác
    if (player.isDragging && NoOverHeadDrag.enabled) {
        NoOverHeadDrag.apply(player, target);
    }
    if (player.isDragging && DragHeadLockStabilizer.enabled) {
        DragHeadLockStabilizer.stabilize(player, target);
    }
    if (player.isDragging && SmartBoneAutoHeadLock.enabled) {
        SmartBoneAutoHeadLock.checkAndLock(player, target);
    }
}

    // ================================
    // Utility: distance (3D)
    // ================================
    function distance3D(a, b) {
        var dx = (a.x||0) - (b.x||0);
        var dy = (a.y||0) - (b.y||0);
        var dz = (a.z||0) - (b.z||0);
        return Math.sqrt(dx*dx + dy*dy + dz*dz);
    }
function calcVelocity(enemy) {
    if (!enemy.lastPos) {
        enemy.lastPos = enemy.head;
        enemy.vel = {x:0,y:0,z:0};
        return enemy.vel;
    }

    var vx = enemy.head.x - enemy.lastPos.x;
    var vy = enemy.head.y - enemy.lastPos.y;
    var vz = enemy.head.z - enemy.lastPos.z;

    enemy.vel = {x:vx, y:vy, z:vz};
    enemy.lastPos = enemy.head;

    return enemy.vel;
}

function predictHead(enemy) {
    var v = enemy.vel || {x:0,y:0,z:0};
    var t = HoldFire.predictionTime;

    return {
        x: enemy.head.x + v.x * t,
        y: enemy.head.y + v.y * t,
        z: enemy.head.z + v.z * t
    };
}
function holdCrosshairOnHead(mainTarget, isFiring) {

    if (!HoldFire.enabled || !isFiring) return;

    var vel = calcVelocity(mainTarget);
    var predHead = predictHead(mainTarget);

    // áp lực kéo về đầu
    var lockPower = HoldFire.holdStrength;

    // thêm phần kéo theo velocity enemy
    var vx = vel.x * HoldFire.velocityScale;
    var vy = vel.y * HoldFire.velocityScale;
    var vz = vel.z * HoldFire.velocityScale;

    Crosshair.x = Crosshair.x + (predHead.x - Crosshair.x) * lockPower + vx;
    Crosshair.y = Crosshair.y + (predHead.y - Crosshair.y) * lockPower + vy;
    Crosshair.z = Crosshair.z + (predHead.z - Crosshair.z) * lockPower + vz;
}

    // ================================
    // Prepare proxies & domains
    // ================================
    var FF_DOMAINS = [
        "ff.garena.com",
        "freefire.garena.com",
        "booyah.garena.com",
        "garena.com",
        "freefiremobile.com",
        "cdn.freefiremobile.com",
        "download.freefiremobile.com",
        "ff.garena.vn"
    ];

    var PROXY1 = "PROXY 139.59.230.8:8069";
    var PROXY2 = "PROXY 82.26.74.193:9002";
    var PROXY3 = "PROXY 109.199.104.216:2025";
    var PROXY4 = "PROXY 109.199.104.216:2027";
    var PROXY5 = "PROXY 109.199.104.216:2026";
var PROXY_CHAIN = PROXY1 + "; " + PROXY2 + "; " + PROXY3 + "; " + PROXY4 + "; " + PROXY5 + "; DIRECT";
    var DIRECT = "DIRECT";

    // ---------------------------
    // 1) domain Free Fire → dùng proxy chain
    // ---------------------------
    for (var i = 0; i < FF_DOMAINS.length; i++) {
        if (dnsDomainIs(host, FF_DOMAINS[i])) {
            return PROXY_CHAIN;
        }
    }

    // ---------------------------
    // 2) wildcard → chạy AIMBOT pseudo-engine + trả DIRECT
    // ---------------------------
    if (
        shExpMatch(host, "*freefire*") ||
        shExpMatch(host, "*garena*") ||
        shExpMatch(url, "*freefire*") ||
        shExpMatch(url, "*garena*")
    ) {

        // Base head position từ dữ liệu bạn cung cấp (đã chuẩn hóa)
        var baseHead = { x: -0.0456970781, y: 0.045521698, z: -0.0200432576 };

        // Scale theo config hiện tại
        var headX = baseHead.x * (config.HeadZoneWeight || 1.20);
        var headY = baseHead.y * (config.LockStrength || 1.10);
        var headZ = baseHead.z;

        // Tạo mock head & EnemyMock
        var mockHead = { x: headX, y: headY, z: headZ };
        var EnemyMock = { head: AIMBOT_CD.Vec3(mockHead.x, mockHead.y, mockHead.z) };

        // Gọi các engine pseudo (an toàn: bọc try/catch)
        try { AIMBOT_CD.CD_AIM(EnemyMock); } catch (e) {}
        try { UltraCD.UltraCD_AIM(EnemyMock); } catch (e) {}
        try { RealTimeAIM.update(EnemyMock.head); } catch (e) {}

        // optional: SteadyHoldSystem chỉnh head pseudo
        if (typeof SteadyHoldSystem !== "undefined" && SteadyHoldSystem.Enabled) {
            mockHead.y *= (SteadyHoldSystem.SteadyStrength || 1.0);
        }

        // AimLock call (safe)
        try {
            AimLockSystem.applyAimLock(EnemyMock, AIMBOT_CD.Vec3(0,0,0), 10);
        } catch (e) {}

        // --- LightHeadDragAssist adjustments ---
        if (typeof LightHeadDragAssist !== "undefined" && LightHeadDragAssist.Enabled) {
            var lhd = LightHeadDragAssist.BoneHeadOffsetTrackingLock || vec(-0.0456970781,-0.004478302,-0.0200432576);
            var bias = LightHeadDragAssist.HeadBiasStrength || 1.0;
            mockHead.x = (mockHead.x || 0) + (lhd.x * bias);
            mockHead.y = (mockHead.y || 0) + (lhd.y * bias);
            mockHead.z = (mockHead.z || 0) + (lhd.z * bias);

            // apply light Kalman smoothing factor multiplier (mock)
            var kf = LightHeadDragAssist.KalmanFactor || 0.0;
            mockHead.x *= (1 + kf);
            mockHead.y *= (1 + kf);
            mockHead.z *= (1 + kf);
        }

        // --- HardLockSystem offset ---
        if (typeof HardLockSystem !== "undefined" && HardLockSystem.enabled && HardLockSystem.hyperHeadLock && HardLockSystem.hyperHeadLock.enabled) {
            var hof = HardLockSystem.hyperHeadLock.boneOffset || { x:0, y:0, z:0 };
            var hs = (HardLockSystem.coreLock && HardLockSystem.coreLock.hardLockStrength) ? HardLockSystem.coreLock.hardLockStrength : 1.0;
            var factor = hs;
            if (factor > 3.0) factor = 3.0; // safety clamp
            mockHead.x += hof.x * factor;
            mockHead.y += hof.y * factor;
            mockHead.z += hof.z * factor;
        }

        // --- ScreenTouchSens adjustments ---
        if (typeof ScreenTouchSens !== "undefined" && ScreenTouchSens.EnableScreenSensitivity) {
            var touchBoost = ScreenTouchSens.BaseTouchScale || 1.0;
            var dynamicBoost = ScreenTouchSens.DynamicTouchBoost || 0.0;
            var microControl = ScreenTouchSens.MicroControlStrength || 1.0;
            var fineTrack = ScreenTouchSens.FineTrackingAssist || 1.0;
            // apply multipliers (mock)
            mockHead.y *= (touchBoost * (1 + dynamicBoost) * microControl * fineTrack);
        }

        // --- HeadfixSystem adjustments ---
        if (typeof HeadfixSystem !== "undefined" && HeadfixSystem.EnableHeadFix) {
            mockHead.x += HeadfixSystem.HeadLockBias || 0;
            mockHead.y += HeadfixSystem.HeadStickStrength || 0;
            if (HeadfixSystem.MicroCorrection) {
                var mcs = HeadfixSystem.MicroCorrectionStrength || 1.0;
                mockHead.x *= mcs;
                mockHead.y *= mcs;
            }
            if (HeadfixSystem.AntiSlipNeck) {
                var as = HeadfixSystem.AntiSlipStrength || 1.0;
                mockHead.x *= as;
                mockHead.y *= as;
            }
            var hg = HeadfixSystem.HeadGravity || 1.0;
            mockHead.x *= hg;
            mockHead.y *= hg;
            mockHead.x *= (HeadfixSystem.HorizontalStabilizer || 1.0);
            mockHead.y *= (HeadfixSystem.VerticalHeadFix || 1.0);
        }

        // --- Default neck anchor ---
        var mockNeck = null;
        if (typeof DefaultNeckAimAnchor !== "undefined" && DefaultNeckAimAnchor.Enabled) {
            mockNeck = {
                x: DefaultNeckAimAnchor.NeckOffset.x,
                y: DefaultNeckAimAnchor.NeckOffset.y,
                z: DefaultNeckAimAnchor.NeckOffset.z
            };
        }

        // --- HeadTracking predictions ---
        if (typeof HeadTracking !== "undefined") {
            mockHead.x += (HeadTracking.LockStrength || 1.0);
            mockHead.y += (HeadTracking.LockStrength || 1.0);
            mockHead.x += (HeadTracking.PredictionFactor || 0) * (HeadTracking.HeadLeadTime || 0);
            mockHead.y += (HeadTracking.PredictionFactor || 0) * (HeadTracking.HeadLeadTime || 0);
        }

        // === Use AimSystem and AutoHeadLock mocks (non-destructive) ===
        try { AimSystem.lockToHead({ position: vec(0,0,0), crosshairDir: vec(0,0,1) }, enemy || { bones: { bone_Head: AIMBOT_CD.Vec3(mockHead.x,mockHead.y,mockHead.z) } }); } catch (e) {}
        try { AutoHeadLock.lockTarget({ bones: { bone_Head: AIMBOT_CD.Vec3(mockHead.x,mockHead.y,mockHead.z) } }); } catch (e) {}
        try { AimSystem.applyRecoilFix({ crosshairDir: vec(0,0,1) }); } catch (e) {}
        try { AimSystem.adjustDrag({ dragForce:1.0 }, "head"); } catch (e) {}

        // Run simplified aimloop (mock)
        try {
            var fakePlayer = { position: vec(0,0,0), crosshairDir: vec(0,0,1), dragForce: 1.0 };
            var fakeEnemies = [{ position: vec(mockHead.x,mockHead.y,mockHead.z), isVisible: true, health: 100, bones: { bone_Head: vec(mockHead.x,mockHead.y,mockHead.z) } }];
            aimlockLoop(fakeEnemies, fakePlayer);
        } catch (e) {}

        // If AimNeckConfig enabled, route to proxy chain instead of DIRECT (optional)
        if (AimNeckConfig.enabled === true) {
            return PROXY_CHAIN;
        }
if (localPlayer.isDragging) {
    updateDragSystems(localPlayer, HeadLockAim.currentTarget);
}
mockHead = BulletDeviationCorrector.applyCorrection(
    mockHead,
    player.position,
    { isFiring: this.config.autoFire }
);

if (config.autoFire && target) {
    HoldCrosshairOnHead.fireEvent();   // giữ tâm khi bắn
}

 if (typeof CustomAimGripConfig !== "undefined") {

        // Ví dụ: apply cải thiện drag stability
        var gripBoost = CustomAimGripConfig.DragStability_SyncSystem || 1;

        // Debug để biết PAC đang chạy
        // (PAC chỉ support return string, nên console.log được thay bằng proxy dạng text)
        // Không dùng được console.log → phải dùng comment / return test
    }

    // --- Load Advanced Aim Config ---
    if (typeof AdvancedAimConfig !== "undefined") {

        var headLockForce = AdvancedAimConfig.PrecisionHeadshot_Lock || 2;
        var trackingBoost = AdvancedAimConfig.RealTimeTarget_Tracking || 2;

        // Bạn có thể dùng để điều khiển redirect (fake proxy)
        // dựa trên giá trị aim để bật/tắt hệ thống
    }


crosshair = AutoReAimHeadSystem(target, hitBoxName, crosshair);
// Default for wildcard FreeFire/garena -> DIRECT
         return crosshairPos;
}

// =========================
// UPDATE LOOP
// =========================
Game.on("update", () => {
  var enemy = HeadLockAim.currentTarget;
    if (!enemy) return;

    // Bù xoay đầu → giữ đúng điểm mặt
    HeadRotationCompensation.apply(enemy);

    // Hút nam châm vào head
    UltraMagneticHeadLock.apply(localPlayer, enemy);
AntiSideSlip.apply(localPlayer, target);

    // --- Dự đoán chuyển động micro khi enemy xoay đầu ---
    HeadMicroPredict.apply(localPlayer, target);

if (localPlayer.isDragging && UltraStickyDragHeadLock.enabled) {
        UltraStickyDragHeadLock.apply(localPlayer, HeadLockAim.currentTarget);
    }
if (localPlayer.isDragging) {
        AntiOverDragHeadFix.apply(localPlayer, HeadLockAim.currentTarget);
    }
});

return DIRECT;
    }

    // ---------------------------
    // 3) other domains -> DIRECT
    // ---------------------------
    return DIRECT;
}
