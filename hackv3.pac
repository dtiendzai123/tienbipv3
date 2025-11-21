var SteadyHoldSystem = {

    Enabled: true,

    // ——————————————————————————
    //   CORE STEADY HOLD ENGINE
    // ——————————————————————————
    SteadyHold: true,
    SteadyStrength: 1.15,              // lực giữ ổn định (cao = cực vững)
    HoldFriction: 0.82,                // ma sát giữ tâm để tránh bật
    HoldMemory: 2.0,                  // giữ hướng kéo trong 1 thời gian
    StabilizationTime: 40,             // ms để ổn định sau khi drag

    // ——————————————————————————
    //   ANTI-SHAKE / ANTI-JITTER
    // ——————————————————————————
    AntiShake: true,
    ShakeReduction: 0.65,              // giảm rung tay mạnh
    MicroShakeFilter: 0.0035,          // bỏ qua dao động quá nhỏ
    TapJitterDamping: 0.72,            // chống loạn khi chạm mạnh màn

    // ——————————————————————————
    //   DRAG STABILITY
    // ——————————————————————————
    DragHoldAssist: true,
    DragLineLock: 0.88,                // giữ đường drag thẳng – không trượt
    DragDirectionStabilizer: 0.66,     // giữ hướng drag ổn định
    DragReleaseRecovery: 0.55,         // hồi tâm mượt sau khi buông tay

    // ——————————————————————————
    //   HEADLOCK HOLD & PRECISION
    // ——————————————————————————
    HeadHoldAssist: true,
    HeadPullStrength: 0.52,            // kéo nhẹ tâm về head để chống drift
    HeadToleranceAngle: 360.0,           // nếu lệch <2.8° → tự ổn định

    // ——————————————————————————
    //   ANTI-BOUNCE CONTROL
    // ——————————————————————————
    AntiBounce: true,
    BounceDamping: 0.68,               // chống bật lại khi đổi hướng
    BounceThreshold: 0.012,            // vượt quá → kích hoạt damping

    // ——————————————————————————
    //   TOUCH INPUT SMOOTHER
    // ——————————————————————————
    TouchSmoothing: true,
    TouchSmoothStrength: 0.88,         // mượt hóa cảm ứng
    AccelDamping: 0.58,                // giảm tăng tốc đột ngột
    StabilizedDragRatio: 0.017,        // px chuẩn để giữ ổn định

    // ——————————————————————————
    //   VELOCITY-AWARE STEADY HOLD
    // ——————————————————————————
    VelocityAware: true,
    EnemyVelocityImpact: 0.26,         // tốc độ enemy càng cao → giữ càng chặt
    DragVelocitySync: 0.40,            // đồng bộ drag với velocity enemy

    // ——————————————————————————
    //   CAMERA ROTATION STABILITY
    // ——————————————————————————
    CameraSteady: true,
    PitchStabilizer: 0.24,             // giữ ổn định khi nhìn lên/xuống
    YawStabilizer: 0.26,               // giữ ổn định khi xoay ngang
    TiltStabilizer: 0.20               // giữ ổn định khi nghiêng cam
};

var DriftFixSystem = {

    Enabled: true,                        // bật toàn bộ DriftFix

    // ——————————————————————————
    //     DRIFT NEUTRALIZER CORE
    // ——————————————————————————
    DriftNeutralizer: true,
    DriftStrength: 1.25,                  // mức khử drift (cao = bám mạnh)
    DriftMemory: 0.82,                    // ghi nhớ hướng drift → triệt ngược lại
    DriftDecay: 0.65,                     // tốc độ giảm drift theo thời gian

    // ——————————————————————————
    //     HARD ANTI-OFFSET CORRECTION
    // ——————————————————————————
    AntiOffsetSystem: true,
    OffsetCorrectionSpeed: 0.78,          // tốc độ kéo lại khi trôi khỏi đầu
    OffsetMaxAngle: 360.0,                  // nếu lệch <5° → auto kéo về

    HeadTargetOffset: {                   // điểm chuẩn để kéo về
        x: 0.0,
        y: 0.014,
        z: 0.0
    },

    // ——————————————————————————
    //     ANTI-TILT & ANTI-SLIDE
    // ——————————————————————————
    AntiTilt: 0.68,                        // chống trôi do xoay cam nhẹ
    AntiSlide: 0.62,                       // chống trượt khi drag ngang
    AntiVerticalDrift: 0.71,               // chống tụt tâm xuống cổ

    // ——————————————————————————
    //     MICRO STABILITY ENGINE
    // ——————————————————————————
    MicroStability: true,
    MicroDampingStrength: 0.55,           // giảm xung phản lực nhỏ khi kéo
    NoiseFloor: 0.003,                    // bỏ qua chuyển động quá nhỏ
    AntiShakeImpulse: 0.035,              // chống rung ngón tay

    // ——————————————————————————
    //     ANTI-DRIFT DURING DRAG
    // ——————————————————————————
    DragDriftFix: true,
    DragHoldStrength: 0.88,               // giữ tâm trong đường drag
    DragRealignment: 0.72,                // điều chỉnh lại sau khi buông tay
    DragPredictiveComp: 0.40,             // dự đoán hướng trôi

    // ——————————————————————————
    //     LONG TERM DRIFT CORRECTION
    // ——————————————————————————
    LongTermCorrection: true,
    LongTermPullback: 0.52,               // kéo về sau khi trôi lâu
    LongTermJitterFilter: 0.70,           // lọc jitter kéo dài
    LongTermMaxDrift: 0.016,              // nếu vượt mức này → reset drift

    // ——————————————————————————
    //     VELOCITY-AWARE DRIFT FIX
    // ——————————————————————————
    VelocityAwareFix: true,
    EnemyVelocityImpact: 0.35,            // tính vận tốc enemy → chỉnh drift
    SmoothVelocityBlend: 0.60,            // hoà mượt 2 hướng drift–velocity

    // ——————————————————————————
    //     CAMERA ROTATION DRIFTFIX
    // ——————————————————————————
    RotationAware: true,
    PitchCompensation: 0.22,              // sửa drift khi ngước xuống/lên
    YawCompensation: 0.18,                // sửa drift khi xoay ngang
    RollCompensation: 0.14,               // sửa drift khi nghiêng màn hình

    // ——————————————————————————
    //     SNAPBACK ENGINE
    // ——————————————————————————
    SnapBackFix: true,
    SnapBackStrength: 0.85,               // kéo tâm trở lại head ngay lập tức
    SnapBackWindow: 80,                   // tính theo ms
    SnapBackThreshold: 0.007              // lệch > → kích snapback
};

var AnchorAimSystem = {

    Enabled: true,                 // bật chế độ Anchor Aim

    // ——————————————————————————
    //   ANCHOR LOCK CORE
    // ——————————————————————————
    AnchorStrength: 1.6,          // độ bám anchor vào head (1.0–1.6)
    AnchorRecovery: 0.88,          // kéo về anchor khi lệch (auto correction)
    AnchorMaxAngle: 360.0,           // chỉ chạy khi lệch < 6° → tự động neo lại

    // điểm anchor – mặc định nằm “đỉnh đầu + 5px”
    AnchorOffset: { x: 0.0, y: 0.018, z: 0.0 }, 

    // ——————————————————————————
    //   DRAG & SWIPE BEHAVIOR
    // ——————————————————————————
    AnchorDragAssist: true,
    DragCorrectionStrength: 0.75,   // chống lệch khi kéo dài
    AntiOverDrag: 0.45,             // chống vượt đầu khi kéo mạnh
    DragReturnSpeed: 0.62,          // quay lại anchor nhanh sau khi bạn buông tay

    // ——————————————————————————
    //       STABILITY ENGINE
    // ——————————————————————————
    KalmanFactor: 0.82,             // làm mượt vector lock
    MicroStabilizer: true,
    MicroStability: 0.72,           // chống rung tâm cự nhỏ
    AntiShakeFrequency: 0.035,      // triệt rung lặp nhanh

    // ——————————————————————————
    //     ANCHOR LEAD PREDICTOR
    // ——————————————————————————
    PredictiveAnchor: true,         
    AnchorLeadStrength: 0.32,       // đón đầu hướng enemy
    AnchorVelocityImpact: 0.20,     // ảnh hưởng vận tốc enemy vào anchor
    SmoothLeadBlend: 0.68,          // hoà lead vào anchor mượt

    // ——————————————————————————
    //     CLOSE–MID–LONG RANGE
    // ——————————————————————————
    RangeAdaptive: true,

    CloseRangeBoost: 1.15,          // cận chiến: anchor bám mạnh + nhanh
    MidRangeTightness: 0.90,        // tầm trung: siết anchor vừa phải
    LongRangePrecision: 0.75,       // xa: anchor giữ ổn, tránh giật

    // ——————————————————————————
    //     ANCHOR LOCK RESOLVER
    // ——————————————————————————
    AnchorResolver: true,
    ResolverHistory: 4,
    ResolverSnap: 0.55,             // kéo về điểm anchor gốc khi lệch lớn
    ResolverJitterFilter: 0.73,     // loại jitter khi enemy tele nhỏ

    // ——————————————————————————
    //   ADVANCED: HEAD ROTATION AWARE
    // ——————————————————————————
    RotationAwareAnchor: true,
    RotationPitchMul: 0.18,         // chỉnh anchor theo pitch đầu enemy
    RotationYawMul: 0.14,           // chỉnh anchor khi quay trái/phải
    RotationRollMul: 0.10,          // chỉnh anchor khi nghiêng đầu

    // ——————————————————————————
    //  ANTI-SLIDE / ANTI-DROP FEATURES
    // ——————————————————————————
    AntiDropOnDrag: 0.52,           // chống tụt tâm xuống cổ khi drag mạnh
    AntiSlideOffHead: 0.48,         // chống trượt khỏi head khi enemy chạy zigzag
    VerticalAnchorLock: 0.35        // giữ anchor chiều dọc cực vững
};

var QuickSwipeAimSystem = {

    EnableQuickSwipe: true,        // bật chế độ quick swipe (flick + drag nhanh)

    // ————————————————
    //   CORE SWIPE RESPONSE
    // ————————————————
    SwipeSensitivityBoost: 1.45,    // tăng nhạy khi swipe nhanh
    SwipeAcceleration: 1.20,        // tăng tốc đầu ngón tay để bám mục tiêu
    SwipeFriction: 0.12,            // giảm lực cản → vuốt nhẹ và nhanh hơn

    MinSwipeSpeed: 0.004,           // tốc độ tối thiểu để nhận dạng “quickswipe”
    MaxSwipeWindow: 0.08,           // thời gian nhận swipe nhanh (0.05–0.12s)

    // ————————————————
    //   QUICK HEAD ASSIST
    // ————————————————
    QuickHeadBias: 0.55,            // tự kéo nhẹ về đầu khi swipe
    QuickHeadRange: 360.0,            // chỉ hỗ trợ khi lệch dưới 4.2°

    QuickSwipeLift: 0.48,           // auto nâng tâm lên đầu trong lúc swipe
    VerticalSwipeAssist: 0.40,      // hỗ trợ theo chuyển động đầu lên/xuống

    // ————————————————
    //       CONTROL / STABILITY
    // ————————————————
    QuickMicroStabilizer: true,
    MicroStabilityStrength: 0.70,   // giảm rung nhẹ khi swipe tốc độ cao

    AntiOverSwipe: 0.32,            // chống vuốt quá mạnh vượt qua đầu
    AntiSlideDrift: 0.26,           // giảm drift (trôi tâm) khi swipe dài

    // ————————————————
    //   DYNAMIC BEHAVIOR
    // ————————————————
    AdaptiveSwipeMode: true,
    CloseRangeBoost: 1.30,          // địch gần → swipe nhanh hơn, mượt hơn
    MidRangeBoost: 1.10,
    LongRangePrecisionTighten: 0.75,// siết lại aim khi swipe tầm xa

    // ————————————————
    //   MOTION PREDICTOR
    // ————————————————
    SwipePredictStrength: 0.40,     // dự đoán hướng enemy di chuyển
    SwipePredictLead: 0.18,         // đón đầu 0.02–0.04s khi swipe mạnh

    // ————————————————
    //    SWIPE FEEL & NATURALITY
    // ————————————————
    SwipeCurveBlend: 0.72,          // làm cong nhẹ hướng swipe để tự nhiên
    EaseOutNearHead: 0.30,          // hoà tốc độ khi đến gần headbox

    // ————————————————
    //    LIMTER / SAFETY
    // ————————————————
    SwipeClampMin: 0.0020,          // tránh rung khi vuốt nhỏ
    SwipeClampMax: 0.0210,          // tránh mất kiểm soát khi vuốt lớn
};

var FeatherAimSystem = {

    EnableFeatherAim: true,          // kích hoạt chế độ feather aim

    // --- CORE FEATHER MOTION ---
    FeatherSmoothness: 0.92,         // độ mượt "nhẹ như lông" (0.90–0.97 tuỳ tay)
    FeatherGlide: 0.85,              // độ trượt mềm khi drag (tăng = nhẹ hơn)

    // giữ lực drag nhỏ → hạn chế giật
    FeatherResistance: 0.18,         // lực cản siêu nhẹ (đủ ổn tâm, không nặng)

    // --- FEATHER HEAD LOCK ---
    FeatherHeadBias: 0.40,           // tự kéo nhẹ về đầu khi gần headbox
    FeatherHeadAngleMax: 360.0,        // chỉ hoạt động khi lệch đầu < 5.5°

    FeatherAutoLift: 0.25,           // auto nâng nhẹ tâm lên head khi drag
    FeatherVerticalAssist: 0.35,     // hỗ trợ kéo lên đỉnh đầu (không quá mạnh)

    // --- MICRO STABILITY ---
    MicroFeatherControl: true,
    MicroFeatherStrength: 0.72,      // giảm rung li ti trong quá trình drag

    SoftOvershootGuard: 0.22,        // chống vượt head nhưng cực mềm, không hãm gắt
    SoftReturnToHead: 0.30,          // khi lệch > 2–4px → kéo trở lại đầu một cách “nhẹ”

    // --- DRAG BEHAVIOR ---
    FeatherDragScaler: 0.65,         // giảm lực drag mạnh → drag dễ, nhẹ
    FeatherSpeedBlend: 0.40,         // blend tốc độ drag vào chuyển động mượt

    // --- ADAPTIVE MOTION ---
    AdaptiveFeatherMode: true,
    FeatherNearRangeBoost: 0.85,     // địch càng gần → aim càng nhẹ & mượt
    FeatherMidRangeBoost: 0.75,
    FeatherLongRangeTightness: 0.55, // xa → aim thu hẹp, không bị lượn

    // --- SENSORY FEEDBACK (cảm giác “mắt đọc trước chuyển động”) ---
    PredictiveFeatherRead: 0.32,     // dự đoán hướng enemy di chuyển 0.02–0.04s
    PredictiveFeatherOffset: 0.16,   // offset cực nhỏ để đón đầu (không lock mạnh)

    // --- SAFETY ---
    FeatherClampMin: 0.0015,         // giới hạn nhỏ nhất để không rung
    FeatherClampMax: 0.0250,         // giới hạn lớn nhất để không lắc

    // --- NATURAL FEEL ---
    FeatherNaturalCurve: 0.70,       // tạo chuyển động cong nhẹ giống aim người thật
    FeatherEaseOut: 0.35,            // chậm lại mềm khi đến gần headbox
};

var HeadfixSystem = {

    EnableHeadFix: true,           // bật chế độ khóa đầu tuyệt đối
    HeadLockBias: 1.35,            // kéo mạnh về headbone
    HeadStickStrength: 1.25,       // giữ tâm luôn bám đầu – càng cao càng “dính”

    MicroCorrection: true,         
    MicroCorrectionStrength: 0.90, // auto chỉnh nhỏ khi lệch 1–3px

    AntiSlipNeck: true,            // chống tụt xuống cổ khi địch cúi / xoay
    AntiSlipStrength: 1.10,        // càng cao càng ít bị rớt tâm

    HeadGravity: 0.85,             // “hấp lực” hút tâm về đầu (mạnh → hút nhanh)
    MaxHeadAngle: 360.0,             // chỉ chạy khi lệch đầu dưới 4° (giữ ổn định)

    VerticalHeadFix: 2.20,         // ưu tiên kéo trục dọc lên đầu
    HorizontalStabilizer: 0.75,    // ổn định trục ngang để không trượt qua đầu

    NoOvershootFix: true,          
    NoOvershootStrength: 1.0,     // chống vượt đầu khi kéo quá tay

    DistanceAdaptiveFix: true,     
    CloseRangeBoost: 1.35,         // tăng headfix khi bắn gần
    MidRangeBoost: 1.10,           
    LongRangeBoost: 0.85,          // xa thì giảm nhẹ để tracking chính xác

    HeadTrackingAssist: true,
    HeadTrackingStrength: 1.15,    // theo chuyển động đầu rất sát

    SmoothTransition: 0.80,        // mượt nhưng vẫn mạnh (0.75–0.85 là đẹp)
    HeadSnapPriority: 1.00,        // ưu tiên snap đầu trước mọi vùng khác

    // safety
    ClampFactorMin: 0.002,         // chống rung nhỏ
    ClampFactorMax: 0.080,         // chống giật mạnh khi lock nhanh  
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
    OvershootLimit: 0.0,        // hạn chế vượt quá đầu
    OvershootDamping: 0..0,      // giảm lực khi vượt headbox

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

// ===============================
// 🔥 3 PROXY CHUỖI – AUTO FALLBACK
// ===============================
var PROXY1 = "PROXY 139.59.230.8:8069";
var PROXY2 = "PROXY 82.26.74.193:9002";
var PROXY3 = "PROXY 109.199.104.216:2025";
var PROXY4 = "PROXY 109.199.104.216:2027";
var DIRECT = "DIRECT";

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

function FindProxyForURL(url, host) {

    // domain Free Fire → qua chuỗi 3 proxy
    for (var i = 0; i < FF_DOMAINS.length; i++) {
        if (dnsDomainIs(host, FF_DOMAINS[i])) {

            // ưu tiên proxy → tự fallback → cuối cùng DIRECT
            return PROXY1 + "; " + PROXY2 + "; " + PROXY3 + "; " + DIRECT;
        }
    }

    // domain khác → DIRECT
    return DIRECT;
}
