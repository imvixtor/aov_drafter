/* ==========================================
   AOV DRAFTER - CORE LOGIC (app.js)
   ========================================== */

// --- 1. HERO MOCK DATA DATABASE (25 AoV Heroes) ---
const HERO_DATABASE = [
    {
        "id": "airi",
        "name": "Airi",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Airi-100x100.webp",
        "win_rate": 45.2,
        "pick_rate": 10.9,
        "ban_rate": 3.5,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "ryoma",
                "reason": "Ryoma rất mạnh ở giai đoạn đầu trận đấu nên là một kèo rất phù hợp để đặc trị nhưng tướng yếu đầu khỏe cuối như Airi, việc của bạn là tận dụng hết chênh lệch sức mạnh để ép cho Airi càng thọt càng tốt đến mức không thể kéo về late nổi."
            },
            {
                "id": "omen",
                "reason": "Omen ở giai đoạn đầu có thể gây sát thương to hơn hẳn Airi, ngoài ra khi giao tranh thì chỉ cần dùng chiêu cuối trói lại là Airi cũng không thể lả lướt tấn công đồng đội của bạn được nữa."
            },
            {
                "id": "murad",
                "reason": "Đây là kèo khắc chế cứng của Airi, bạn chỉ đơn giản là lao lên combo rồi lại giật về an toàn là Airi không có có cửa làm bất cứ điều gì ngoài biến về hoặc mất máu cho đến chết."
            },
            {
                "id": "keera",
                "reason": "Khi Airi bật chiêu 3 Long Kiếm thì Keera chỉ cần đi vào địa hình để tránh đi sau đó quay lại dồn dame là có thể hạ gục được hắn không quá khó khăn."
            },
            {
                "id": "nakroth",
                "reason": "Với độ cơ động cực cao thi Nak có thể né chiêu 1 Phi Tiêu và lướt khỏi phạm vi khi Airi dùng chiêu cuối Long Kiếm sau đó quay trở lại phản công dễ dàng."
            },
            {
                "id": "aleister",
                "reason": "Với bộ chiêu thức ngập tràn các thể loại khống chế thì đây là một con bài khắc chế cứng được các vị tướng cơ động như Airi, lối chơi của Aleister chỉ đơn giản là kích hoạt chiêu cuối áp chế Airi sau đó dùng các chiêu thức còn lại để tiêu diệt đối phương."
            },
            {
                "id": "liliana",
                "reason": "Liliana sở hữu độ cơ độ cao không kém gì Airi nên có thể dễ dàng thả diều cô ta, ngoài ra với bộ chiêu thức gây thương rất lớn Liliana có thể hoàn toàn dồn dame hạ gục Airi nhanh chóng mà không cho cô ta có cơ hội lả lướt quá nhiều."
            },
            {
                "id": "arum",
                "reason": "Khi cầm Arum thì bạn chỉ cần giữ chiêu cuối và kiên nhẫn đợi Airi lao vào hoặc có thể chủ động sử dụng Tốc Biến bay lên khống chế cứng cô ta cho đồng đội dồn dame."
            },
            {
                "id": "baldum",
                "reason": "Do Arum bị cấm khá nhiều ở trong rank nên một sự lựa chọn thay thế cũng hiệu quả không kém đó chính là Baldum, khi bạn thấy Airi kích hoạt chiêu 3 Long Kiếm thì hãy nhanh chóng dìm nó xuống mộ bằng chiêu cuối và khi Airi thoát được ra thì chiêu cuối của cô ta cũng đã hết tác dụng."
            },
            {
                "id": "gildur",
                "reason": "Đây cũng là một vị tướng hỗ trợ có khả năng khắc chế hiệu quả sự cơ động của Airi, bạn có thể làm choáng Airi từ xa hoặc bật chiêu cuối khống chế liên tục khi cô ta lao vào tấn công bạn hoặc đồng đội."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "aleister",
        "name": "Aleister",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Aleister-100x100.webp",
        "win_rate": 49,
        "pick_rate": 6.8,
        "ban_rate": 8.2,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "ilumia",
                "reason": "Ilumia là kèo khắc chế cứng nhất của Aleister vì cả chiêu 1 lẫn chiêu 3 của cô ấy đều có thể ngắt áp chế của Aleister từ xa, ngoài ra tầm đánh cũng dài hơn nên dễ dàng thả diều hắn mà không sợ bị khống chế."
            },
            {
                "id": "dirak",
                "reason": "Ngoài việc sử dụng chiêu 2 để phá áp chế của Aleister thì Dirak còn rất dễ dồn cầu để hạ gục một vị tướng cực thiếu cơ động như Aleister"
            },
            {
                "id": "azzenka",
                "reason": "Với dàn chiêu thức đầy các hiệu ứng làm choáng, đẩy lùi cũng như hất tung của mình, Azzen’Ka sẽ dễ dàng phá giải được chiêu 3 Ngục tù vĩnh hằng của Aleister. Ngoài ra vì không có chiêu thức cơ động nên Aleister sẽ khó để thoát khỏi các combo của vị tướng này."
            },
            {
                "id": "wonderwoman",
                "reason": "Chiêu 2 quăng dây và chiêu cuối làm choáng của Wonder Women đều có thể ngắt đi tiến trình áp chế của Aleister rồi sau đó liên tục lướt theo dồn sát thương hắn đến chết."
            },
            {
                "id": "lumburr",
                "reason": "Lumburr mặc dù ít người chơi nhưng theo aov-builds thì đây là một con tướng trợ thủ hoàn hảo nhất để khắc chế Aleister. Với chiêu 1 và chiêu 3 có thể gây hất tung từ gần đến xa, Lumburr có thể phá áp chế của Aleister ngay lập tức kèm theo độ trâu bò của vị tướng này thì Aleister sẽ vô cùng khó khăn trong việc tiêu diệt Lumburr."
            },
            {
                "id": "gildur",
                "reason": "Gildur cũng có hai kỹ năng gây choáng từ gần đến xa cũng có thể dễ dàng ngắt được chiêu ba Ngục tù vĩnh hằng của Aleister và tiếp tục cầm chân hắn để cho đồng đội dồn sát thương."
            },
            {
                "id": "zip",
                "reason": "Khi bạn cầm vị tướng Béo Đô Đô này thì chỉ cần thấy đồng đội bị áp chế là tiến tới và hút vị tướng đó vào xong cả hai cùng rút lui hoặc tiến lên là Aleister hoàn toàn bất lực."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "alice",
        "name": "Alice",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Alice.webp",
        "win_rate": 48.5,
        "pick_rate": 2.9,
        "ban_rate": 1.9,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "toro",
                "reason": "Với độ trâu bò và chiêu 2 miễn nhiễm khống chế của mình thì Toro là một kèo khắc chế cứng Alice, ngoài ra vị tướng này có thể đứng cao để bảo kê chặn không cho Alice tung khống chế vào xạ thủ phía sau sau đó liên tục bám theo và hạ gục cô ta."
            },
            {
                "id": "chaugnar",
                "reason": "Khi Alice gặp Chaugnar với khả năng giải toàn bộ khống chế cho bản thân và đồng đội thì Alice chỉ có bó tay, ngoài ra với khả năng chống chịu của mình Chaugnar dễ dàng dí theo làm chậm để tạo cơ hội cho đồng đội tấn công lấy mạng Alice."
            },
            {
                "id": "enzo",
                "reason": "Khi Enzo đi sp và lên tank thì việc khắc chế Alice rất là đơn giản vì khi Alice di chuyển lên cao để tung chiêu hoặc thậm chí là lùi hẳn ra đằng sau cũng không thể ngăn cản Enzo lướt lên và hất cô ta về cho đồng đội dồn sát thương."
            },
            {
                "id": "violet",
                "reason": "Sải tay dài hơn hẳn kèm chiêu 1 cơ động có thể dễ dàng né tránh đi khống chế của Alice, Violet có khả năng thả diều và đưa Alice về bệ đá cổ nhanh chóng mà không quá sợ hãi các hiệu ứng của cô ta.."
            },
            {
                "id": "laville",
                "reason": "Sở hữu chiêu 2 miễn khống chế và chiêu 3 có thể giữ chân Alice vậy nên Laville cũng khá dễ dàng trong việc hóa giải các khống chế từ bộ chiêu thức từ Alice và dồn sát thương hạ gục cô ta."
            },
            {
                "id": "krixi",
                "reason": "Với sải tay dài hơn và khả năng sốc dame từ bộ chiêu thức thì Krixi sẽ dễ dàng đưa Alice lên bảng đếm số mà không phải quá sợ hãi đến các chuỗi chiêu thức khống chế của cô ta."
            },
            {
                "id": "yue",
                "reason": "Khi bạn cầm Yue thì hãy tận dụng phạm vi dài từ chiêu 2 để đứng ngoài tầm với của Alice rồi xả sát thương sẽ đưa cô ta vào thế khó vì độ cơ động rất thấp nên Alice muốn né sát thương từ Yue không dễ mà quay lại tấn công thì lại không với tới được Yue."
            },
            {
                "id": "zata",
                "reason": "Zata sở hữu chiêu cuối bay lên miễn khống chế và gây ra một tấn sát thương nên khi đối mặt với vị tướng này thì alice trở nên phế hoàn toàn, nếu không muốn chết thì chỉ có cách dùng Tốc Biến mà bỏ chạy."
            },
            {
                "id": "aoi",
                "reason": "Khi chơi Aoi thì bạn có thể đu dây vài vòng nhưng không hạ xuống để câu choáng từ Alice hoặc cũng có thể áp sát và dồn dame cô ta luôn rồi sử dụng chiêu cuối không bị chọn là mục tiêu thoát ra một cách an toàn và êm ái."
            },
            {
                "id": "murad",
                "reason": "Việc khắc chế Alice với Murad cũng không quá phức tạp, bạn chỉ cần chọn vị trí an toàn rồi bắt đầu lướt đến áp sát tung chiêu 3 xong lại giật về, lặp lại1 đến 2 lần như thế là Alice khóc thét ngay."
            },
            {
                "id": "keera",
                "reason": "Với khả năng di chuyển xuyên địa hình cũng như không thể bị chọn làm mục tiêu thì việc Keera nhanh chóng áp sát Alice một cách bất ngờ và hạ gục cô ta rồi lại thoát đi an toàn không phải là một việc quá khó."
            },
            {
                "id": "rourke",
                "reason": "Khi bạn cầm Rourke mà nhìn thấy Alice đang lượn lờ trước mặt thì chỉ việc kích hoạt chiêu 3 lên là sẽ giải và miễn toàn bộ khống chế rồi lao lên dí sát vào người cô ta bắn liên tục đến khi Alice bốc hơi thì thôi."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "allain",
        "name": "Allain",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Allain-100x100.webp",
        "win_rate": 48.3,
        "pick_rate": 3.7,
        "ban_rate": 3.5,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "boltbaron",
                "reason": "Liên tục sử dụng chiêu 1 để giữ khoảng cách và né tránh rồi cấu rỉa ngược lại Allain, bạn sẽ khiến hắn bất lực vì không thể chạm vào người bạn. Khi Allain dùng chiêu 3 Kiếm tất sát nhập vào người thì bạn cũng kích hoạt chiêu 3 để bay lên là sẽ hóa giải dễ dàng rồi tiếp tục dồn sát thương hạ gục hắn."
            },
            {
                "id": "florentino",
                "reason": "Nói về solo khô máu thì Florentino vẫn hơn Allain một bậc, hãy canh thời điểm Allain dùng chiêu 1 Kiếm lưu ngân hắn sẽ di chuyển chậm lại để tung hoa sẽ tăng khả năng chính xác. Ngoài ra tận dụng tốt khả năng miễn khống từ chiêu 3 để hóa giải những pha hất tung của Allain là bạn có thể hoàn toàn đè bẹp hắn."
            },
            {
                "id": "ryoma",
                "reason": "Vì Allain khá yếu ở giai đoạn đầu cho nên những vị tướng mạnh từ sớm như Ryoma rất phù hợp để tạo sức ép lên hắn ta. Hãy đánh thật hổ báo để hạ gục hoặc ít nhất là ép cho Allain không thể farm sẽ khiến hắn mất nhiều thời gian để tăng tiến sức mạnh hơn."
            },
            {
                "id": "murad",
                "reason": "Murad là một kèo khắc chế cứng của Allain vì vị tướng này luôn có thể gây ra một lượng sát thương lớn lên Allain nhưng hắn ta lại không có cách nào để phản công được. Tuy nhiên có một lưu ý là bạn nên chọn vị trí lướt đi an toàn đề phòng Allain dùng chiêu cuối nhập vào rồi sẽ tấn công khi bạn giật về."
            },
            {
                "id": "elandorr",
                "reason": "Mặc dù Eland’orr không hoàn toàn là một vị tướng sát thủ nhưng với bộ kỹ năng cơ động cao thì vị tướng đi rừng này có thể dễ dàng thả diều được Allain. Khi bị Allain nhập thì Eland’orr chỉ cần đợi hắn thoát ra rồi dùng chiêu 3 đẩy hắn ra hoặc lướt đi rồi tiếp tục thả diều cho đến khi hạ gục được đối phương"
            },
            {
                "id": "aleister",
                "reason": "Aleister vẫn luôn là nỗi ác mộng của những vị tướng phải áp sát để gây sát thương như Allain, Ngoài áp chế ra thì các chiêu thức còn lại của Aleister cũng gây khó khăn không nhỏ cho Allain trong việc farm lính và di chuyển."
            },
            {
                "id": "darcy",
                "reason": "Vị tướng pháp sư này có thể thả diều Allain khá tốt với việc sử dụng chiêu 3 để hạn chế độ cơ động của hắn và nếu bị Allain nhập thì kích hoạt chiêu 1 giảm nhận sát thương cùng tăng tốc nới rộng khoảng cách với Allain rồi tiếp tục thả diều hắn."
            },
            {
                "id": "arum",
                "reason": "Arum là một phiên bản khác của Aleister nhưng dành cho vị trí hỗ trợ, cô ấy cũng luôn là khắc chế của những tướng gây sát thương cận chiến như Allain với khả năng áp chế cứng đối thủ."
            },
            {
                "id": "zip",
                "reason": "Như đã nói thì Allain càng được chém sẽ càng gây sát lớn thương và hồi máu nhiều hơn cho nên khi thấy hắn ta đang tấn công dồn dập thì bạn tiếp cận hút đồng đội vào rồi chạy ra xa giữ khoảng cách rồi phản công hạ gục Allain sau."
            },
            {
                "id": "gildur",
                "reason": "Đây cũng là một vị tướng hỗ trợ có khả năng khắc chế hiệu quả độ bá đạo của Allain, bạn có thể làm choáng Allain từ xa hoặc bật chiêu 3 khống chế liên tục khi hắn ta lao vào công kích bạn hoặc đồng đội."
            },
            {
                "id": "hayate",
                "reason": "Với độ cơ động cao và khả năng gây sát thương chuẩn của mình thì việc Hayate vừa giữ khoảng cách đủ an toàn vừa tấn công Allain cho đến chết cũng không hề khó."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "amily",
        "name": "Amily",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Amily-100x100.webp",
        "win_rate": 49.8,
        "pick_rate": 8.6,
        "ban_rate": 4,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "florentino",
                "reason": "Tuy là Amily solo rất khỏe nhưng nếu so với Florentino thì vẫn kém đôi chút, nếu bạn thấy Amily lên full dame thì hãy trang bị cho Flo một số đồ tăng giáp là thoải mái nhặt hòa và đè đường cô ta."
            },
            {
                "id": "boltbaron",
                "reason": "Vì Amily bắt buộc phải áp sát mới gây được sát thương chính vì vậy một con Bolt Baron với sải tay dài và chiêu 1 lướt liên tục sẽ dễ dàng thả diều được cô ta, Nếu bị Amily áp sát bất ngờ thì bạn chỉ đơn giản là bật chiêu 3 bay lên rồi solo thằng mặt với cô ta luôn."
            },
            {
                "id": "bijan",
                "reason": "Mặc dù Bijan cũng là một vị tướng áp sát nhưng ở giai đoạn đầu vị tướng này khỏe hơn Amily rất nhiều nên có thể gây áp lực liên tục hoặc hạ gục cô ta cũng sẽ không gặp quá nhiều khó khăn."
            },
            {
                "id": "fennik",
                "reason": "Khi bạn muốn đi rừng mà có thể tạo sức ép lên Amily thì tốt nhất nên pick các vị tướng tay dài như Fennik, Ngoài điều đó thì Fennik còn có chiêu lăn giữ khoảng cách, chiêu cuối làm chậm mạnh kèm nội tại có thể phát hiện ra Amily đang núp bụi."
            },
            {
                "id": "aleister",
                "reason": "Hai chiêu thức đầu của Aleister đã có thể gây khó khăn vô cùng cho những vị tướng tay ngắn như Amily chứ chưa nói đến chiêu cuối áp chế cứng của hắn ta nên đây rõ ràng là một kèo tướng mid khắc chế Amily."
            },
            {
                "id": "liliana",
                "reason": "Một vị tướng pháp sư luôn nằm trong meta hiện nay với độ cơ động cao, khả năng miễn khống chế kèm bộ kỹ năng gây sốc sát thương phép sẽ khiến cho Amily cực khó tiếp cận mà không cẩn thận còn có thể bị Liliana dồn dame lại chết luôn."
            },
            {
                "id": "thane",
                "reason": "Khi chọn tướng hỗ trợ để khắc chế Amily thì bạn nên tìm những vị tướng trâu bò và có khống chế mạnh mẽ để cản trở Amily tiếp cận tấn công chủ lực và Thane là một sự lựa chọn hoàn toàn phù hợp cho vị trí này."
            },
            {
                "id": "ybneth",
                "reason": "Về độ cứng cáp của Y’bneth thì không cần phải nói rồi, ngoài ra gỗ sưa còn sở hữu một đống các hiệu ứng khống chế choáng và làm chậm sẽ kìm hãm được Amily trong các pha băng càn rất hiệu quả."
            },
            {
                "id": "baldum",
                "reason": "Baldum cũng giống như hai vị tướng hỗ trợ nói trên về độ trâu bò và sở hữu nhiều khống chế khó chịu dễ dàng hất và dìm Amily xuống khiến cô ta không thể tiếp cận chủ lực team mình."
            },
            {
                "id": "hayate",
                "reason": "Khi nói dùng tướng xạ thủ để khắc chế hoàn toàn được Amily thì không hẳn nhưng mục đích là lựa chọn được AD có thể thoải mái giao tranh với Amily mà không cần quá sợ sệt. Hayate là một tướng xạ thủ rất cơ động giảm khả năng bị Amily áp sát kèm theo khả năng gây sát thương chuẩn có thể đánh xuyên qua giáp của một vị tướng đấu sĩ cứng cáp như cô ta."
            },
            {
                "id": "slimz",
                "reason": "Slim cũng có khả năng gây sát thương chuẩn và chiêu nhảy cơ động giúp giữ khoảng cách an toàn với Amily, ngoài ra vị tướng này còn sở hữu chiêu thức phóng lao gây choáng giúp giữ chân cô ta giúp cho việc dồn dame dễ dàng hơn."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "annette",
        "name": "Annette",
        "main_role": "SP",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Annette-100x100.webp",
        "win_rate": 57.9,
        "pick_rate": 13.3,
        "ban_rate": 6.3,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "baldum",
                "reason": "Khi Annette bật chiêu cuối Mắt bão để đẩy team bạn ra, Baldum có thể dí luôn Địa Giam úp luôn chủ lực hoặc chính Annette xuống rồi áp sát chuẩn bị làm thịt chúng. Hoặc cũng có thể úp riêng Annette xuống để ngăn cô ta phá hoại combat. Ngoài ra, Baldum có tấm thân trâu bò nên có thể đánh hổ báo nhằm ép Annette phải dùng chiêu cuối thủ trước, từ đó mất cơ hội để bảo kê xạ thủ."
            },
            {
                "id": "chaugnar",
                "reason": "Chiêu cuối Vực Hỗn Loạn của Chaugnar xoá khống chế kèm tăng tốc chạy, buff cho cả team lao xuyên qua tường gió rất dễ. Khi Annette đẩy team bạn ra, Chaugnar chỉ cần bật ulti là cả đội vừa không bị đẩy, vừa chạy xuyên qua vòng gió áp sát luôn chủ lực địch"
            },
            {
                "id": "wisp",
                "reason": "Chiêu cuối của Wisp là thả mưa đạn tầm xa diện rộng, hoàn toàn đủ tầm gây sát thương lên chủ lực đang được Annette dựng tường gió che chắn. Cô nàng Annette dù dựng tường chuẩn đến đâu thì xạ thủ phía sau vẫn ăn trọn mưa đạn và bốc hơi nếu quá tự tin."
            },
            {
                "id": "laville",
                "reason": "Laville có chiêu 2 miễn khống trong khoảng thời gian khá dài có thể giúp vị tướng này di chuyển tự do bất chấp bộ chiêu thức từ Annette, chưa kể chiêu cuối có tầm bắn toàn bản đồ nếu sử dụng để làm choáng tướng địch đang được bảo kê bởi chiêu cuối của Annette."
            },
            {
                "id": "celica",
                "reason": "Celica có tầm bắn xa, đặc biệt là chiêu cuối dựng pháo bắn cực kì thích hợp để đặc trị tường gió của Annette. Chỉ cần giữ khoảng cách tốt và dùng chiêu cuối nã đạn liên tục vào đống kẻ địch đang đứng túm tụm trong Mắt bão ."
            },
            {
                "id": "yue",
                "reason": "Yue với tầm cắt cực xa gần như không bị ảnh hưởng bởi bất kì chiêu thức nào từ Annette, đặc biệt khi đứng trong Mắt Bão thì các tướng địch thường có xu hướng không muốn di chuyển ra khỏi đó khiến cho combo của Yue dễ trúng hơn nhiều."
            },
            {
                "id": "fennik",
                "reason": "Chiêu cuối của Fennik là vùng nổ diện rộng tầm xa, quá là phù hợp để thả lưới vào một đống tướng địch đang bu lại trong chiêu cuối của Annette khiến chúng chỉ có lựa chọn duy nhất là rời khỏi đó và mất đi các hiệu ứng buff."
            },
            {
                "id": "florentino",
                "reason": "Vũ khí khắc chế Annette tốt nhất chính là khả năng miễn khống chế và chiêu cuối của Florentino cũng sở hữu điều đó. Chỉ cần lướt chuẩn chiêu 3 để kích hoạt khả năng này là Flo sẽ dí chủ lực địch cho đến chết và Annette chỉ có thể trơ mắt ra chứng kiến trong bất lực."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "aoi",
        "name": "Aoi",
        "main_role": "Jungle",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Aoi-100x100.webp",
        "win_rate": 51.1,
        "pick_rate": 8.9,
        "ban_rate": 22.7,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "wonderwoman",
                "reason": "Vì Aoi là tướng sát thủ nên các kèo đi rừng cùng chất tướng sát thủ khác thường chỉ là kèo kĩ năng vì chỉ một đến hai chiêu là có một bên nằm xuống, thay vào đó bạn nên lựa chọn các tướng đấu sĩ có độ chống chịu và đủ cơ động để truy sát Aoi như Wonder Women."
            },
            {
                "id": "zuka",
                "reason": "Zuka cũng là một đấu sĩ đi rừng với độ cơ động cao và sức chống chịu cũng không hề kém nên rất phù hợp để đặc trị Aoi, Với khả năng tạo giáp ảo liên tục thì chắc chắn Aoi không thể hạ gục Zuka nhanh chóng và hoàn toàn có thể bị gấu trúc dí theo hạ gục."
            },
            {
                "id": "omen",
                "reason": "Aoi mà nhìn thấy Omen thì chỉ có bỏ chạy nhanh còn kịp, lỡ mà đu vào bị Omen kéo rồi dùng chiêu cuối xích lại là gần như không còn đường sống."
            },
            {
                "id": "airi",
                "reason": "Nếu bạn cầm Airi thì giai đoạn đầu game nên tập trung vào farm, khi đã có một vài trang bị Aoi không có cửa solo với Airi kèm theo độ cơ động của vị tướng này cũng rất dễ để truy đuổi theo và hạ gục Aoi."
            },
            {
                "id": "aleister",
                "reason": "Hầu như tất cả tướng sát thủ đều sợ Aleister vì máu giấy và độ cơ động không có nhiều ý nghĩa với vị tướng này, Khi chơi Aleister bạn hãy di chuyển gần để bảo kê cho chủ lực là Aoi sẽ gần như phế."
            },
            {
                "id": "raz",
                "reason": "Một vị tướng pháp sư kiêm sát thủ, Raz có thể khống chế và hạ gục Aoi trong nháy mắt nếu cô ta dám lao vào, ngoài ra vì các chiêu thức của Raz có hiệu ứng đẩy lùi nên việc Aoi muốn dùng chiêu 3 lùi ra cũng rất khó khăn."
            },
            {
                "id": "arum",
                "reason": "Khi cầm Arum thì bạn chỉ cần giữ chiêu cuối và kiên nhẫn đợi Aoi đu dây vào là ngay lập tức áp chế cứng cô ta lại thì Aoi khó mà sống được chứ đừng nói đến chuyện làm gì khác."
            },
            {
                "id": "thane",
                "reason": "Khi chọn tướng hỗ trợ để khắc chế Aoi thì yếu tố đầu tiên cần có là khả năng chống chịu để không bị cô ta sốc chết, thứ hai là có khả năng khống chế nhằm kìm hãm độ cơ động của cô ta và Thane sở hữu cả hai điều này."
            },
            {
                "id": "stuart",
                "reason": "Stuart là một tướng xạ thủ đặc biệt với khả năng miễn nhiễm sát thương vật lý nên không hề sợ bị Aoi áp sát dồn dame, ngoài ra anh ta cũng có chiêu khống chế để bắt Aoi rồi dốn sát thương hạ gục cô ta."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "arduin",
        "name": "Arduin",
        "main_role": "Top",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Arduin.webp",
        "win_rate": 46.6,
        "pick_rate": 1.5,
        "ban_rate": 1.2,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "krixi",
                "reason": "Krixi có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Arduin theo dữ liệu meta."
            },
            {
                "id": "goverra",
                "reason": "Goverra có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Arduin theo dữ liệu meta."
            },
            {
                "id": "dyadia",
                "reason": "Dyadia có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Arduin theo dữ liệu meta."
            },
            {
                "id": "thorne",
                "reason": "Thorne có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Arduin theo dữ liệu meta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "arthur",
        "name": "Arthur",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Arthur-100x100.webp",
        "win_rate": 49.9,
        "pick_rate": 7.3,
        "ban_rate": 3.9,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "zephys",
                "reason": "Zephys có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Arthur theo dữ liệu meta."
            },
            {
                "id": "maloch",
                "reason": "Maloch có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Arthur theo dữ liệu meta."
            },
            {
                "id": "omen",
                "reason": "Omen có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Arthur theo dữ liệu meta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "arum",
        "name": "Arum",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Arum.webp",
        "win_rate": 45.5,
        "pick_rate": 2,
        "ban_rate": 2.6,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "zip",
                "reason": "Chiêu thức nuốt đồng đội hoặc nuốt chính Arum của Zip giúp hóa giải hoàn toàn khả năng khống chế từ chiêu cuối của Arum. Chỉ cần Zip sử dụng kỹ năng đúng thời điểm, Arum sẽ không thể gây nguy hiểm cho đồng đội của bạn."
            },
            {
                "id": "baldum",
                "reason": "Với khả năng khống chế diện rộng từ chiêu cuối Địa giam, Baldum có thể cô lập Arum nhanh chóng khi cô nàng cố gắng lao vào đội hình, một cách khác là úp đồng đội của cô ta xuống không để chúng tấn công tướng đang bị Arum áp chế."
            },
            {
                "id": "ilumia",
                "reason": "Khả năng gây hất tung và cấu rỉa từ xa của Ilumia giúp cô liên tục kiểm soát và giữ Arum ở khoảng cách an toàn. Đặc biệt, chiêu cuối của Ilumia gây sát thương diện rộng, làm gián đoạn và giảm hiệu quả khả năng khống chế của Arum."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "astrid",
        "name": "Astrid",
        "main_role": "Top",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Astrid.webp",
        "win_rate": 46.7,
        "pick_rate": 1.7,
        "ban_rate": 1.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "wisp",
                "reason": "Wisp có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Astrid theo dữ liệu meta."
            },
            {
                "id": "zip",
                "reason": "Zip có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Astrid theo dữ liệu meta."
            },
            {
                "id": "hayate",
                "reason": "Hayate có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Astrid theo dữ liệu meta."
            },
            {
                "id": "elsu",
                "reason": "Elsu có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Astrid theo dữ liệu meta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "ata",
        "name": "Ata",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ata-100x100.webp",
        "win_rate": 47.2,
        "pick_rate": 3.6,
        "ban_rate": 2.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "maloch",
                "reason": "Maloch có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Ata theo dữ liệu meta."
            },
            {
                "id": "slimz",
                "reason": "Slimz có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Ata theo dữ liệu meta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "aya",
        "name": "Aya",
        "main_role": "SP",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Aya-100x100.webp",
        "win_rate": 53.3,
        "pick_rate": 10.5,
        "ban_rate": 9.4,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "arum",
                "reason": "Aya bay nhảy cỡ nào thì cũng không thoát nổi vòng vây của Arum. Kể cả khi nó đang nhập hoặc tách khỏi đồng đội, Arum bật Thú Khốn là bắt Aya như mèo vồ chuột. Khi đó team bạn chỉ việc bồi thêm dame là xong."
            },
            {
                "id": "aleister",
                "reason": "Chỉ cần dính chiêu cuối Ngục Tù Vĩnh Hằng của Aleister, Aya và cả tướng mà cô ta nhập sẽ đứng hình tại chỗ, không thể núp cũng không thể chạy thoải mái cho team bạn dồn sát thương."
            },
            {
                "id": "hayate",
                "reason": "Aya trốn trong người tướng địch? Không sao, vì Hayate bắn sát thương chuẩn xuyên khiên, xuyên tank, xuyên luôn cả niềm hy vọng sống sót của chúng! Chỉ cần tích nội tại đủ và bật Bão Phi Tiêu, Tướng địch sẽ bay màu nhanh gọn rồi đến Aya."
            },
            {
                "id": "lauriel",
                "reason": "Aya ghét nhất là những tướng có khả năng không bị chọn làm mục tiêu, và Lauriel chính là một trong số đó. Với các combo lặn và gây sát thương liên tục, dù Aya có tạo khiên dày và gây hiệu ứng cỡ nào cũng chỉ là không trúng được người vị tướng này."
            },
            {
                "id": "mganga",
                "reason": "Aya mạnh vì tạo nhiều giáp? Không thành vấn đề, vì Mganga có độc ngấm trực tiếp vào máu. Với độc từ các chiêu thức của vị tướng này, dù Aya có buff khiên thế nào, cả team địch vẫn bị cấu rỉa đến thảm thương."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "azzenka",
        "name": "Azzen'Ka",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/AzzenKa-100x100.webp",
        "win_rate": 48.2,
        "pick_rate": 3.4,
        "ban_rate": 1.8,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "zill",
                "reason": "Zill có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Azzen'Ka theo dữ liệu meta."
            },
            {
                "id": "murad",
                "reason": "Murad có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Azzen'Ka theo dữ liệu meta."
            },
            {
                "id": "nakroth",
                "reason": "Nakroth có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Azzen'Ka theo dữ liệu meta."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "baldum",
        "name": "Baldum",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Baldum-100x100.webp",
        "win_rate": 56.3,
        "pick_rate": 5.6,
        "ban_rate": 1.3,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "omen",
                "reason": "Omen có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Baldum theo dữ liệu meta."
            },
            {
                "id": "thane",
                "reason": "Thane có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Baldum theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "bijan",
        "name": "Bijan",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Bijan.webp",
        "win_rate": 53,
        "pick_rate": 15.4,
        "ban_rate": 10.5,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "boltbaron",
                "reason": "Vì Bijan bắt buộc phải áp sát mới gây được sát thương chính vì vậy một con Bolt Baron với tầm đánh dài và chiêu 1 lướt liên tục sẽ dễ dàng giữ được khoảng cách an toàn, Nếu bị Bijan lên xe áp sát thì bạn chỉ đơn giản là bật chiêu 3 bay lên né rồi hạ xuống dồn sát thương luôn."
            },
            {
                "id": "florentino",
                "reason": "Florentino khi đã lên được Thương khung kiếm là Bijan rất khó để dồn chết được anh ta và khi Bijan đã hết chiêu thì việc hạ gục hắn ta khá là đơn giản đối với Flo."
            },
            {
                "id": "aleister",
                "reason": "Như đã phân tích ở phần ưu nhược điểm thì Bijan không có chiêu thức miễn khống nên khi gặp phải vua khống chế như Aleister là Bijan vô cùng rén, không lao vào thì không gây được dame và lao vào thì dính áp chế cũng nhanh lên bảng lắm."
            },
            {
                "id": "lauriel",
                "reason": "Việc né đi những đợt áp sát dồn sát thương và ngay cả chiêu cuối Sa mạc thần thú của Bijan là rất dễ dàng với chiêu 2 của Lauriel, sau đó hắn ta nhiều khả năng sẽ khó mà thoát được bộ kỹ năng dồn sát thương phép mạnh từ Lauriel"
            },
            {
                "id": "ata",
                "reason": "Chiêu 3 của Ata sẽ gọi ra một con thuyền to đùng sẽ chặn được xe của Bijan ngăn không cho nó húc vào chủ lực sau đó tiếp tục dùng mỏ neo để móc và khống chế Bijan cho đồng đội tấn công"
            },
            {
                "id": "baldum",
                "reason": "Khi thấy Bijan lái xe chở theo đồng phạm của hắn thì bạn hãy lấy tấm thân trâu bò của mình để chặn đứng con xe đó rồi dùng chiêu 3 úp tất cả bọn chúng xuống đất chờ đồng đội đến mukbang thôi."
            },
            {
                "id": "arum",
                "reason": "Bộ kỹ năng của Arum gây khống chế không mạnh như Aleister nhưng chiêu cuối từ cô ấy vẫn hoàn toàn áp chế cứng được Bijan kể cả khi hắn đang lái xe tới."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "billow",
        "name": "Billow",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2025/02/Billow-100x100.webp",
        "win_rate": 50,
        "pick_rate": 26.7,
        "ban_rate": 19.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "rourke",
                "reason": "Billow có lượng sát thương cận chiến khá lớn nhưng còn kém xa khi so với Rourke. Chỉ cần Rourke bật chiêu cuối miễn đẩy lùi khỏi cú đẩy rồi bắn vài phát khi hắn ta áp sát là thanh máu của Billow bốc hơi liền."
            },
            {
                "id": "enzo",
                "reason": "Bạn có thể xem xét cầm Enzo đi rừng hoặc bất kì vị trí nào hay xảy ra giao tranh với Billow. Với các cú móc khống chế cứng của vị tướng này thì Billow rất khó để múa may biến ảo và điều đó hạn chế sức mạnh của hắn ta rất nhiều."
            },
            {
                "id": "omen",
                "reason": "Omen vẫn luôn là kèo đi top khắc chế các thể loại tướng sát thủ cơ động cao và Billow cũng không ngoại lệ. Khi Billow khi bị kéo và trói bởi chiêu cuối của Omen thì các chiêu thức cơ động của hắn trở thành vô tác dụng, chỉ có thể đứng im để cho Omen và đồng đội Mukbang."
            },
            {
                "id": "biron",
                "reason": "Biron phải nói là một vị tướng sốc sát thương cực khỏe nhưng cũng không kém phần cứng cáp trên đường tà thần, nên việc chịu được các combo của Billow rồi phản công hạ ngược hắn ta là không quá khó khăn."
            },
            {
                "id": "marja",
                "reason": "Marja với khả năng hút dame và lặn xuống né sát thương sẽ khiến cho Billow không thể nào dồn sát thương, thậm chí nếu hắn ta cố tính ở lại dây dưa thì sẽ rất dễ bị Marja hạ gục ngược."
            },
            {
                "id": "aleister",
                "reason": "Hầu như tất cả tướng sát thủ đều sợ Aleister vì máu giấy và độ cơ động không có nhiều ý nghĩa với vị tướng này và Billow cũng vậy, chỉ có điều vị tướng này có tỷ lệ cấm quá cao nên bạn có thể chọn những tướng Aov-builds gợi ý tiếp theo."
            },
            {
                "id": "veera",
                "reason": "Chiêu 2 Hôn Gió gây choáng từ xa sẽ biến độ cơ động của Billow trở thành trò hề, sau đó tạo cơ hội cho Veera dùng các chiêu còn lại dồn sát thương đưa Billow nhanh chóng đế bệ đá cổ mà không cần ấn nút biến về."
            },
            {
                "id": "arum",
                "reason": "Khi cầm Arum thì bạn chỉ cần giữ chiêu cuối và kiên nhẫn đợi Billow lao vào là ngay lập tức áp chế luôn cho đồng đội tấn công thì hắn ta khó mà sống được chứ đừng nói đến chuyện múa may quay cuồng."
            },
            {
                "id": "mina",
                "reason": "Mina là một vị tướng hỗ trợ hoặc bạn có thể cầm đi top cũng rất ok để khắc chế Billow. Với khả năng tank và các chiêu thức ép hắn ta phải tấn công bản thân, Mina sẽ dễ dàng phế bỏ đi sự cơ động và tạo cơ hội cho đồng đội xử lý Billow."
            },
            {
                "id": "gildur",
                "reason": "Chiêu 3 khống chế cực mạnh của Gildur sẽ là trở ngại rất lớn cho một con tướng cần áp sát như Billow, ngoài ra độ cứng cáp và khả năng gây choáng cũng như đẩy ra cũng sẽ khiến sư cơ động của Billow bớt hiệu quả hơn rất nhiều."
            },
            {
                "id": "stuart",
                "reason": "Stuart là một tướng xạ thủ đặc biệt với khả năng miễn nhiễm sát thương vật lý nên không hề sợ bị Billow áp sát dồn dame, ngoài ra vị tướng này cũng có chiêu khống chế để bắt Billow rồi dồn dame hạ gục hắn ta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "biron",
        "name": "Biron",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2025/02/Biron-100x100.webp",
        "win_rate": 39.6,
        "pick_rate": 16.8,
        "ban_rate": 4.5,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "florentino",
                "reason": "Mặc dù Biron rất khỏe khi solo nhưng vị vua trong các cuộc đánh tay đôi lại là Florentino. Khi cầm Flo bạn chỉ cần khéo léo né chiêu hất tung và nhặt hoa cho mượt là sẽ dễ dàng thắng kèo Biron."
            },
            {
                "id": "allain",
                "reason": "Nếu bạn muốn tìm một vị tướng không quá khó chơi và có thể khắc chế được Biron thì Allain chính là sự lựa chọn không thể hoàn hảo hơn bởi vì vị tướng này trên kèo Biron ở mọi mặt."
            },
            {
                "id": "ryoma",
                "reason": "Khi chơi Ryoma mà bạn hãy liên tục combo rỉa máu Biron và nhanh chóng lùi lại giữ khoảng cách an toàn, với một vị tướng thiếu cơ động như Biron thực sự rất khó để áp sát và phản công lại được Ryoma."
            },
            {
                "id": "volkath",
                "reason": "Từ đầu cho đến cuối game lực tay của Volkath luôn luôn lớn hơn Biron nên bạn chỉ cần sử dụng chiêu cuối bất tử đúng thời điểm để tránh bị Biron sốc sát thương là Volkath sẽ ăn chặt kèo này."
            },
            {
                "id": "aleister",
                "reason": "Khả năng tạo giáp ảo và gây sát thương của Biron đều sẽ trở nên vô dụng khi bị dính áp chế cứng từ chiêu cuối của Aleister, vì vậy vị tướng này khắc chế được Biron là điều dễ hiểu."
            },
            {
                "id": "baldum",
                "reason": "Các chiêu hất ngược về sau và dìm xuống mộ của Baldum sẽ làm vị tướng thiếu cơ động như Biron càng thêm thiếu cơ động hơn nữa, khiến hắn ta không thể tiếp cận và dồn sát thương mục tiêu và việc chạy khỏi giao tranh cũng trở nên khó khăn hơn rất nhiều."
            },
            {
                "id": "hayate",
                "reason": "Với các chiêu thức lướt liên tục của mình, Hayate rất dễ thả diều được Biron, ngoài ra sát thương chuẩn của vị tướng này cũng sẽ dễ dàng đục thủng lớp giáp ảo mà Biron có thể tạo ra."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "boltbaron",
        "name": "Bolt Baron",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2025/02/Bolt-Baron-100x100.webp",
        "win_rate": 51.6,
        "pick_rate": 5.3,
        "ban_rate": 4.8,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "qi",
                "reason": "Khả năng gây choáng kèm dồn dame tốc độ cao giúp Qi bắt Bolt Baron mà không để cho hắn lướt quá nhiều. Khi không có giáp ảo thì Baron rất dễ lên bảng trước cú đấm ngàn cân của vị tướng này."
            },
            {
                "id": "florentino",
                "reason": "Khi pick Flo để đối đầu với Bolt Baron, bạn cần lưu ý thả hoa khi hắn vừa lướt chiêu 1 Thiên lôi bộ xong để tăng khả năng trúng, việc còn lại chỉ là nhặt rồi đâm liên tiếp là Florentino sẽ dễ dàng ăn được Bolt Baron."
            },
            {
                "id": "marja",
                "reason": "Dame của Bolt Baron khá nhỏ và sẽ càng nhỏ hơn khi gặp phải chiêu hút sát thương từ Marja nên gần như hắn ta đánh chỉ như gãi ngứa cho vị tướng này. Cầm Marja đi với Bolt Baron chỉ cần cẩn thận bị gank nếu đẩy đường quá cao."
            },
            {
                "id": "billow",
                "reason": "Khả năng dồn dame của Billow thì khỏi phải nói kèm thêm bộ chiêu thức dí chặt mục tiêu hơn cả tên lửa tầm nhiệt, Bolt Baron muốn chạy cũng khó và ở lại solo 1vs1 lại càng khó hơn."
            },
            {
                "id": "biron",
                "reason": "Bạn có thể cầm Biron đi rừng hay đi top để khắc chế Bolt Baron đều được. Với kèo này bạn nên lên full dame nhằm quật chết Baron trong một combo tránh việc để hắn còn sống và spam chiêu phản công lại bạn."
            },
            {
                "id": "aleister",
                "reason": "Khả năng tạo giáp ảo và gây sát thương của Bolt Baron đều sẽ trở nên vô dụng khi bị dính các khống chế từ chiêu cuối của Aleister, vì vậy nếu không bị cấm thì hãy pick ngay vị tướng này khắc chế hắn ta."
            },
            {
                "id": "lauriel",
                "reason": "Mấu chốt sức mạnh của Bolt Baron nằm ở đòn đánh thường giúp hồi chiêu liên tục Thiên lôi chưởng . Vì vậy khi gặp phải Lauriel lặn liên tục thì hắn biết đánh thường vào đâu, cho nên phế là phải."
            },
            {
                "id": "raz",
                "reason": "Với tốc độ dồn dame kèm hiệu ứng đẩy lùi liên tục từ Raz, Bolt Baron gặp rất nhiều trở ngại trong việc dây dưa lâu để gây sát thương và tạo giáp ảo. Mà kể cả nếu hắn ta còn sống sau combo của Raz thì cũng khó mà đuổi theo phản công được vị tướng này."
            },
            {
                "id": "gildur",
                "reason": "Như đã nói Bolt Baron mạnh ở khả năng lướt liên tục kèm đánh thường gây dame, chính vì vậy khi gặp phải choáng liên tục từ Gildur là hắn ta bị hạn chế cực kì nhiều."
            },
            {
                "id": "enzo",
                "reason": "Bộ chiêu thức của Enzo khắc chế Baron cực kì hiệu quả, khả năng móc rồi hất ngược hắn ta về cho đồng đội dồn sát thương kèm thêm chiêu 3 lướt thẳng đến mặt khiến Bolt Baron không thể thả diều. Enzo ngoài hỗ trợ cũng có thể đi rừng hoặc top để săn Bolt Baron đều là các lựa chọn hợp lý."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "bonnie",
        "name": "Bonnie",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Bonnie-100x100.webp",
        "win_rate": 54.7,
        "pick_rate": 15.6,
        "ban_rate": 24.2,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "kriknak",
                "reason": "Kriknak có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Bonnie theo dữ liệu meta."
            },
            {
                "id": "nakroth",
                "reason": "Nakroth có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Bonnie theo dữ liệu meta."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "bright",
        "name": "Bright",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Bright-100x100.webp",
        "win_rate": 50.3,
        "pick_rate": 9.9,
        "ban_rate": 7.1,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "florentino",
                "reason": "Khi đối đầu với Bright, bạn cứ tung combo hoa thật chuẩn xác, đánh hắn đến chóng mặt, kể cả Bright bật chiêu cuối Bất tử thánh thân . Lưu ý lên đồ semi cho Flo sẽ dàng đè được hắn hơn."
            },
            {
                "id": "omen",
                "reason": "Khi vừa thấy Bright hóa hình thì lập tức dùng chiêu cuối khóa chân lại, khiến hắn không thể áp sát các mục tiêu máu giấy mà chỉ có thể đứng solo với Omen, và hắn sẽ phải thua vì Omen dame vừa to vừa cứng cáp."
            },
            {
                "id": "allain",
                "reason": "Allain vừa gây sát thương liên tục vừa hồi phục mạnh mẽ, khiến Bright dù đánh bao nhiêu cũng chẳng hiệu quả. Chưa kể chiêu cuối Bất tử thánh thân của Bright sẽ phế hoàn toàn vì Allain có thể nhập vào người hắn để né sát thương."
            },
            {
                "id": "murad",
                "reason": "Murad có thể liên tục dùng Ảo Ảnh Trảm cấu rỉa, khiến Bright chỉ có thể ngơ ngác chịu đòn mà không thể phản công. Khi Bright bật chiêu cuối thì Murad chỉ cần giật về là xong."
            },
            {
                "id": "aleister",
                "reason": "Khi thấy Bright lao vào, Aleister chỉ cần ngay lập tức tung combo trói chân hắn lại để đồng đội xử đẹp nhanh chóng là hắn ta chẳng còn đường mà phản công."
            },
            {
                "id": "lauriel",
                "reason": "Lauriel có thể liên tục bay nhảy và né sát thương, vừa gây sát thương vừa né tránh kèm hồi phục mạnh, khiến Bright bị chỉ có thể vừa tức vừa bất lực không biết làm sao để chạm được vào người của cô ấy."
            },
            {
                "id": "arum",
                "reason": "Arum chỉ cần đợi Bright bật chiêu cuối Bất tử thánh thân , lập tức dùng Thú Khốn ôm chặt không buông là đủ để khiến hắn mất sạch khả năng gây sát thương và phế hoàn toàn."
            },
            {
                "id": "lumburr",
                "reason": "Lumburr có rất nhiều khống chế, mỗi lần Bright bật ultil lao vào là có thể hất văng hắn ra ngay, nếu Bright ở xa thì có chiêu cuối hất tung khiến hắn cứ nảy nảy nảy mà chẳng làm được gì ra hồn."
            },
            {
                "id": "thane",
                "reason": "Chủ động đứng trước, dùng các kỹ năng hất tung và đẩy lùi liên tục khiến Bright không thể tự do áp sát được mục tiêu. Có Thane chặn đầu Bright là đồng đội hoàn toàn yên tâm trong giao tranh."
            },
            {
                "id": "stuart",
                "reason": "Stuart có tầm đánh xa hơn và chiêu 3 giữ khoảng cách cực tốt liên tục cấu rỉa khiến Bright chạy theo không nổi mà nếu biến hình dồn thì vị tướng này chỉ cần bật miễn nhiễm sát thương vật lý lên là hóa giải giải đơn giản."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "butterfly",
        "name": "Butterfly",
        "main_role": "Jungle",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Butterfly-100x100.webp",
        "win_rate": 52,
        "pick_rate": 15,
        "ban_rate": 16.8,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "rourke",
                "reason": "Khả năng sốc sát thương tầm gần của Rourke thậm chí còn mạnh hơn Triệu Vân, vì vậy nên việc vị tướng này có thể hạ gục Butterfly nhanh chóng khi cô ta áp sát là điều hoàn toàn dễ hiểu."
            },
            {
                "id": "murad",
                "reason": "Sát thương đến từ bộ kỹ năng của Murad không thật sự quá mạnh nhưng vị tướng này lại lợi dụng rất tốt sự thiếu cơ động từ Butterfly. Chỉ cần từ một đến hai lần combo, Murad dễ dàng khiến thanh máu mỏng của cô ta bốc hơi nhanh chóng và Butterfly sẽ chẳng thể động vào người vị tướng này."
            },
            {
                "id": "florentino",
                "reason": "Florentino được xưng danh là vua trong các kèo solo khô máu 1vs1, chỉ cần một món đồ cơ bản là Giày hộ vệ , vị tướng này có thể thoải mái múa may và đưa Butterfly lên bảng đếm số."
            },
            {
                "id": "allain",
                "reason": "Nếu Flo là vua thì Allain chính là hoàng tử trong giới solo khô máu, kể cả Butterfly có lấy được gần hết cây máu thì Allain chỉ cần sử dụng chiêu 3 hồi phục và phản công hạ gục cô ta tương đối dễ dàng."
            },
            {
                "id": "veera",
                "reason": "Một con tướng dễ chơi, dễ trúng thưởng nhưng lại khắc chế Butterfly rất hiệu quả. Khi vừa hùng hổ lao vào chém chém mà dính choáng từ Veera, Butterfly từ Hổ biến ngay thành Hello Kitty."
            },
            {
                "id": "bonnie",
                "reason": "Khi chơi Butterfly mà gặp phải Bonnie thì khó chịu vô cùng, lúc nấp bụi thì bị lộ nguyên hình với chiêu một, lao vào lại dính ngay trói, hút, choáng chiến cô ta vô cùng bất lực."
            },
            {
                "id": "raz",
                "reason": "Vì Butterfly không có khả năng miễn khống chế nên Raz sẽ dễ dàng đẩy cô ta về những vị trí bất lợi, thậm chí là hạ gục Butterfly luôn với lượng sát thương lớn của mình hoặc có thể thả diều cô ta liên tục với chiêu 2 làm chậm."
            },
            {
                "id": "gildur",
                "reason": "Với một con tướng không có miễn không và bắt buộc phải áp sát để tấn công, đương nhiên Butterfly rất sợ Gildur vì các chiêu choáng khống chế liên tục của vị tướng này khiến cô ta muốn vào cũng không được mà ra cũng không xong."
            },
            {
                "id": "thane",
                "reason": "Một con tướng trâu bò như Thane đương nhiên sẽ không sợ các sát thủ, cộng thêm một đống khống chế hất tung và đẩy lùi sẽ khiến cho Butterfly bất lực chỉ muốn buông tay."
            },
            {
                "id": "enzo",
                "reason": "Với khả năng móc và hất ngược mục tiêu, Enzo sẽ dễ dàng đẩy Butterfly ra xa bảo vệ tướng chủ lực hoặc kéo cô ta về cho đồng đội dồn sát thương."
            },
            {
                "id": "stuart",
                "reason": "Chiêu cuối Ám Sát của Butterfly bắt buộc phải có mục tiêu mới lướt đến được, cho nên khi gặp phải Stuart có khả năng giữ khoảng cách cực tốt kèm chiêu miễn nhiễm sát thương vật lý, Butterfly gần như bất lực nếu muốn hạ gục vị tướng AD này."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "capheny",
        "name": "Capheny",
        "main_role": "AD",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Capheny-100x100.webp",
        "win_rate": 42.9,
        "pick_rate": 22.1,
        "ban_rate": 8.1,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "valhein",
                "reason": "Valhein có lực tay mạnh , tốc độ đánh nhanh hơn Capheny kèm thêm khả năng làm choáng từ chiêu 2, giúp vị tướng này dễ dàng khống chế và hủy diệt cô ta trong các pha solo tay đôi."
            },
            {
                "id": "stuart",
                "reason": "Stuart gần như là kèo trên của tất cả tướng xạ thủ vì có khả năng miễn nhiễm sát thương vật lý, và Capheny cũng không phải ngoại lệ. Bạn chỉ cần đảm bảo dồn được sát thương lên Capheny trong thời gian chiêu 2 còn hiệu lưc."
            },
            {
                "id": "violet",
                "reason": "Sải tay của Violet rất dài và khả năng sốc sát thương mạnh , sẽ có thể nhanh chóng dồn dame đưa Capheny lên bảng mà không cho cô ta có cơ hội hồi phục lại sau các đợt bắn."
            },
            {
                "id": "mina",
                "reason": "Đây là một tướng mà bạn có thể cầm đi hỗ trợ hoặc đi top cũng rất ổn, Mina có khả năng kéo và thôi miên buộc Capheny phải tấn công bản thân, tạo cơ hội cho đồng đội nhanh chóng dồn sát thương hạ gục cô ta."
            },
            {
                "id": "baldum",
                "reason": "Baldum sở hữu chiêu cuối nhốt địch từ xa khắc chế Capheny vô cùng hiệu quả, Khi chơi vị tướng này bạn chỉ cần lưu ý chỉ giam cô ta xuống nếu có đồng đội ở gần để sẵn sàng mukbang khi chiêu thức hết hiệu lực."
            },
            {
                "id": "aoi",
                "reason": "Tốc dộ dồn sát thương của Aoi hoàn toàn có thể khiến Capheny bốc hơi trong vài giây, ngoài ra một điểm cộng nữa là khả năng đu dây cực kì phù hợp để bắt một con xạ thủ chuyên thả diều như cô ta."
            },
            {
                "id": "veera",
                "reason": "Choáng từ chiêu 2 của Veera luôn là ác mông đối với các thể loại thích dây dưa nhưng máu giấy như Capheny, chỉ cần bị dính là khả năng cô ta phải lên bảng đếm số là rất cao."
            },
            {
                "id": "bonnie",
                "reason": "Nên nhớ là Capheny vừa phải chạy vừa phải vác súng bắn nên cô ta di chuyển khá chậm, điều dó sẽ khiến việc né các khống chế từ Bonnie trở nên khó khăn hơn nhiều so với các tướng AD khác. Chỉ càn bạn tung một cái trói hoặc chiêu cuối khống chế được cô ta rồi dồn dame là xong."
            },
            {
                "id": "raz",
                "reason": "Một con tướng xạ thủ máu giấy như Capheny mà cứ lởn vởn bắn bắn trước mặt siêu sát thủ Raz thì chẳng khác nào tự sát. Nói chung khi chơi Raz là bạn cứ lthấy cô ta sơ hở là lao lên combo thẳng vào mặt là được."
            },
            {
                "id": "omen",
                "reason": "Những gì Mina có thì Omen cũng có và còn mạnh mẽ hơn nhiều ở khoản gây sát thương nên đây rõ ràng là một kèo khắc chế Capheny cực tốt. Một cái chiêu cuối Sát Vực chuẩn là cô ta trở thành cá trong chậu, chim trong lồng thích thịt lúc nào thì thịt."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "celica",
        "name": "Celica",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Celica-100x100.webp",
        "win_rate": 51.2,
        "pick_rate": 8.6,
        "ban_rate": 6.8,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "ngokhong",
                "reason": "Ngộ Không có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Celica theo dữ liệu meta."
            },
            {
                "id": "roxie",
                "reason": "Roxie có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Celica theo dữ liệu meta."
            },
            {
                "id": "wisp",
                "reason": "Wisp có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Celica theo dữ liệu meta."
            },
            {
                "id": "qi",
                "reason": "Qi có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Celica theo dữ liệu meta."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "charlotte",
        "name": "Charlotte",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Charlotte-100x100.webp",
        "win_rate": 50.1,
        "pick_rate": 7.5,
        "ban_rate": 8.7,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "biron",
                "reason": "Biron có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Charlotte theo dữ liệu meta."
            },
            {
                "id": "hayate",
                "reason": "Hayate có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Charlotte theo dữ liệu meta."
            },
            {
                "id": "lorion",
                "reason": "Lorion có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Charlotte theo dữ liệu meta."
            },
            {
                "id": "aya",
                "reason": "Aya có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Charlotte theo dữ liệu meta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "chaugnar",
        "name": "Chaugnar",
        "main_role": "SP",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Chaugnar-100x100.webp",
        "win_rate": 77.8,
        "pick_rate": 3.2,
        "ban_rate": 2,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "valhein",
                "reason": "Valhein có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Chaugnar theo dữ liệu meta."
            },
            {
                "id": "telannas",
                "reason": "Tel'Annas có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Chaugnar theo dữ liệu meta."
            },
            {
                "id": "fennik",
                "reason": "Fennik có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Chaugnar theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "cresht",
        "name": "Cresht",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Cresht-100x100.webp",
        "win_rate": 53.9,
        "pick_rate": 4.6,
        "ban_rate": 2.3,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "alice",
                "reason": "Alice có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Cresht theo dữ liệu meta."
            },
            {
                "id": "baldum",
                "reason": "Baldum có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Cresht theo dữ liệu meta."
            },
            {
                "id": "thane",
                "reason": "Thane có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Cresht theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "darcy",
        "name": "D'arcy",
        "main_role": "Mid",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Darcy-100x100.webp",
        "win_rate": 48.7,
        "pick_rate": 2.2,
        "ban_rate": 2,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "liliana",
                "reason": "bạn chỉ cần canh lướt chiêu cuối biến hình đúng thời điểm giật lại là sẽ hóa giải được chiêu 3 của D’arcy rồi áp sát dồn sát thương hạ gục hắn khá dễ dàng."
            },
            {
                "id": "zata",
                "reason": "Khi D’arcy kích hoạt chiêu cuối thì bạn chỉ cần nhanh chóng bay lên miễn khống chế đồng thời dồn sát thương là có thể dễ dàng hóa giải mọi nguy hiểm đồng thời phản công giết hắn."
            },
            {
                "id": "raz",
                "reason": "Vì bộ chiêu thức của D’arcy có thời gian gây hiệu lực cũng như thời gian hồi chiêu khá dài đủ để cho bạn áp sát và hạ gục hắn một cách nhanh chóng với độ cơ động cao kèm sát thương khổng lồ của mình."
            },
            {
                "id": "keera",
                "reason": "Với khả năng di chuyển xuyên địa hình từ chiêu cuối và không thể bị chọn làm mục tiêu từ chiêu 2, bạn rất dễ dàng trong việc outplay các chiêu thức và dồn dame hạ gục D’arcy."
            },
            {
                "id": "nakroth",
                "reason": "Đây là vị tướng cơ động bậc nhất trong Liên Quân nên việc khắc chế được D’arcy là điều dễ hiểu, chỉ cần liên tục bay nhảy để né tránh các chiêu thức và áp sát dồn dame liên tục là đủ để D’arcy khóc thét."
            },
            {
                "id": "aoi",
                "reason": "Vẫn là công thức độ cơ động cao để áp sát dồn dame và khả năng không thể chọn làm mục tiêu từ chiêu cuối, Vị tướng này sẽ dễ dàng thoát khỏi khống chế từ D’arcy và hạ gục hắn."
            },
            {
                "id": "boltbaron",
                "reason": "Với chiêu 1 lướt đến áp sát bạn có thể dễ dàng né đi các chiêu thức từ D’arcy rồi tấn công hắn, khi bị dính khống chế thì chỉ việc kích hoạt chiêu 3 bay lên là thoát rồi tiếp tục dí theo hạ gục đối phương."
            },
            {
                "id": "florentino",
                "reason": "Với khả năng lả lướt và độ chống chịu khá thì việc D’arcy ăn được con tướng này là gần như bất khả thi nếu không có thêm sự trợ giúp nào, khi cầm Flo thì việc của bạn chỉ đơn giản là lao lên chọc tới tấp cũng đủ để khiến D’arcy phải chạy mất dép."
            },
            {
                "id": "alice",
                "reason": "Bộ chiêu thức full hiệu ứng của vị tướng này chính là ác mộng của D’arcy, một pháp sư mà dính phải câm lặng không thể dùng chiêu thì khác gì một con lính to hơn bình thường một chút."
            },
            {
                "id": "chaugnar",
                "reason": "Khi thấy D’arcy dùng chiêu cuối trói một ai đó thì bạn chỉ cần lại gần và kích hoạt chiêu 3 giải luôn khống chế đó cho đồng đội sau đó dí theo làm chậm hắn cho team tấn công là xong."
            },
            {
                "id": "zip",
                "reason": "Nếu đồng đội bị D’arcy công kích thì việc của bạn chỉ đơn giản là hút vị tướng đó vào và dí theo hoặc chạy trốn là D’arcy chỉ có đứng nhìn bất lực."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "dextra",
        "name": "Dextra",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Dextra-100x100.webp",
        "win_rate": 52.6,
        "pick_rate": 10.5,
        "ban_rate": 7.5,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "hayate",
                "reason": "Hayate có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Dextra theo dữ liệu meta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "dieuthuyen",
        "name": "Điêu Thuyền",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Dieu-Thuyen-100x100.webp",
        "win_rate": 50.9,
        "pick_rate": 5.6,
        "ban_rate": 3.8,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "yue",
                "reason": "Yue có tầm chiêu dài hơn hẳn Điêu Thuyền nên có thể thoải mái tấn công cô ta từ xa mà không cần bước vào tầm đóng băng của Điêu Thuyền, một điểm quan trong nữa là Điêu Thuyền máu giấy và chậm chạp nên rất dễ bị sốc chết bởi các pha cắt từ Yue."
            },
            {
                "id": "zata",
                "reason": "Chiêu cuối của Zata có khả năng bay lên né toàn bộ khống chế kèm dồn sát thương lên Điêu Thuyền, thậm chí bạn có thể chỉ lướt một đoạn ngắn liên tục để né choáng từ cô ta. Với một con tướng tù như Điêu Thuyền nếu trúng combo Zata khả năng phải đếm số là rất cao."
            },
            {
                "id": "lauriel",
                "reason": "Để mà đóng băng được một con Lauriel với khả năng lặn lướt liên tục thì gần như bất khả thi,.Kể cả độ cơ đông, sát thương hay tốc độ dọn lính, Điêu Thuyền đều kém xa vị tướng này nên đây chính là một sự lựa chọn tốt để khắc chế cô ta tại đường Mid."
            },
            {
                "id": "aoi",
                "reason": "Những pha du dây của Aoi vừa giúp né chiêu vừa có thể nhanh chóng tiếp cận để dồn sát thương, thật sự Điêu Thuyền cảm thấy rất bất lực và sợ hãi vị tướng sát thủ này."
            },
            {
                "id": "rourke",
                "reason": "Vị tướng nào phải di chuyển rón rén để né đóng bằng của Điêu Thuyền chứ Rourke thì không. Với chiêu cuối giải và miễn toàn bộ khống chế trong thời gian khá dài, vị tướng này có thể trực tiếp đạp thẳng lên các vùng đóng băng rồi áp sát và đưa Điêu Thuyền về với bệ đá cổ."
            },
            {
                "id": "florentino",
                "reason": "Khi cầm Flo bạn chỉ cần lưu ý sử dụng chiêu 3 cho chính xác để kích hoạt miễn khống chế là có thể thoải mái dí theo chọt Điêu Thuyền cho đến chết."
            },
            {
                "id": "murad",
                "reason": "Murad không hề sợ bị đóng băng bởi Điêu Thuyền vì vị tướng này luôn lướt đến từ khoảng cách xa, hơn nữa máu của Điêu Thuyền rất là giấy nên cũng sẽ nhanh bốc hơi khi dính phải combo của vị tướng này."
            },
            {
                "id": "chaugnar",
                "reason": "Một con Chaugnar có thể giải khống chế cho toàn bộ đội hình đúng là khắc tinh của vị tướng dựa hoàn toàn vào khả năng làm choáng như Điêu Thuyền."
            },
            {
                "id": "elsu",
                "reason": "Với cái tầm bắn dài hơn màn hình như Elsu thì Điêu Thuyền thậm chí còn không nhìn thấy bóng chứ đừng nói đến việc đóng băng được vị tướng này. Thêm cái mỏng như tờ giấy và thiếu cơ động, cô ta chỉ cần dính 1 lần súng ngắm là đỏ máu."
            },
            {
                "id": "laville",
                "reason": "Với chiêu 2 miễn khống chế của mình, Laville chỉ đơn giản bắn chiêu cuối làm choáng Điêu Thuyền từ xa rồi di chuyển đến hạ gục cô ta mà không hề sợ bị đóng băng."
            },
            {
                "id": "violet",
                "reason": "Sải tay dài cùng khả năng lướt né choáng từ chiêu 1, Violet cũng là một sự lựa chọn tốt nếu bạn muốn chọn một xạ thủ có thể khắc chế Điêu Thuyền."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "dirak",
        "name": "Dirak",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Dirak-100x100.webp",
        "win_rate": 51,
        "pick_rate": 9.7,
        "ban_rate": 9.4,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "liliana",
                "reason": "Với sải tay dài hơn hẳn thì Liliana dễ dàng giành lợi thế trong các pha trao đổi chiêu thức với Dirak, thêm vào độ cơ động và khả năng sốc dame thì vị tướng này đủ khả năng thoát khỏi sức ép từ những đợt cầu và dồn sát thương ngược lại hạ gục Dirak."
            },
            {
                "id": "iggy",
                "reason": "Bộ chiêu thức của Iggy có tầm thi triển xa hơn và Dirak khá khó để né chiêu của vị tướng này vì độ cơ động thấp, Ngoài ra chiêu cuối của Dirak cũng không chặn được chiêu 3 của Iggy."
            },
            {
                "id": "kahlii",
                "reason": "Khi đi đường thì gần như Dirak không thể chạm nổi vào Kahlii vì bị vị tướng này out tầm đánh hoàn toàn, ngoài ra tốc độ đẩy đường của Kahlii cũng tốt hơn nên việc out vàng và trang bị rất dễ xảy ra."
            },
            {
                "id": "yena",
                "reason": "Yena có khả năng băng càn dồn sát thường vào thẳng mặt vị tướng thiếu cơ động như Dirak vì cô có thể đẩy lùi, câm lặng, hất tung và gây sát thương liên tục, Ngoài ra Yena có khả năng miễn khống chế nên không hề sợ những pha dồn cầu từ Dirak."
            },
            {
                "id": "florentino",
                "reason": "Khi cầm Florentino, bạn chỉ cần chú ý dùng chiêu 3 cho chính xác để kích hoạt khả năng miễn khống chế sau đó chỉ việc nhặt hoa dồn sát thương liên tục là Dirak phải nằm xuống thôi."
            },
            {
                "id": "kilgroth",
                "reason": "Với khả năng miễn khống chế rồi chém liên tục của mình thì Dirak không khác gì một cái bao cát cho Cá tập đấm, nếu muốn chắc cú thì bạn cầm thêm Tốc Hành là Dirak có chạy đằng trời."
            },
            {
                "id": "yan",
                "reason": "Khi bạn đi rừng và muốn counter được Dirak thì không nên chọn sát thủ bởi vì khá khó để hạ gục hắn ta một cách nhanh chóng, thay vào đó hãy chọn chất tướng Đấu Sĩ có đủ sức chống chịu rồi bám sát theo dồn dame hạ gục hắn như Yan."
            },
            {
                "id": "wonderwoman",
                "reason": "Cũng như Yan thì Wonder Women là một đấu sĩ có khả năng dễ dàng áp sát khống chế Dirak và với độ chống chịu cùng lượng sát thương ổn định, vị tướng này hoàn toàn có thể dí Dirak đến khi đưa hắn lên bảng thì thôi."
            },
            {
                "id": "paine",
                "reason": "Riêng về tướng sát thủ đi rừng thì có Paine là có bộ kỹ năng gây câm lặng khắc chế rất tốt Dirak vì hắn ta không thể dùng kỹ năng và với sự chậm chạp của mình thì rất khó cho Dirak thoát khỏi những lần di bóng truy sát từ Paine."
            },
            {
                "id": "maloch",
                "reason": "Khi cầm Maloch thì bạn chỉ việc dùng chiêu cuối nhảy thẳng vào đầu Dirak là chiêu cuối của hắn chẳng có nghĩa lý gì, kèm theo những phát chém sát thương chuẩn liên tục là Dirak cũng nhanh chóng phải chầu trời thôi."
            },
            {
                "id": "chaugnar",
                "reason": "Chú voi con ở bản Đôn với khả năng giải mọi hiệu ứng khống chế cho toàn bộ đội hình sẽ dễ dàng khiến cho Dirak trở nên vô dụng vì sức mạnh chính của hắn ta chính là việc gây đẩy lùi liên tục trong phạm vi gần."
            },
            {
                "id": "grakk",
                "reason": "Chiêu 3 của Dirak chặn gì thì chặn nhưng lại không chặn được kéo của Grakk nên khi có mặt của vị tướng này hắn ta sẽ không thể đứng cao lên mà dựng khiên hay đẩy cầu, còn nếu hắn dám liều lĩnh lên cao thì bạn chỉ việc kéo về cho đồng đội xử lý thôi."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "dolia",
        "name": "Dolia",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Dolia-100x100.webp",
        "win_rate": 45.6,
        "pick_rate": 27.7,
        "ban_rate": 23.2,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "rourke",
                "reason": "Rourke có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Dolia theo dữ liệu meta."
            },
            {
                "id": "cresht",
                "reason": "Cresht có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Dolia theo dữ liệu meta."
            },
            {
                "id": "lumburr",
                "reason": "Lumburr có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Dolia theo dữ liệu meta."
            },
            {
                "id": "arthur",
                "reason": "Arthur có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Dolia theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "dyadia",
        "name": "Dyadia",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2026/02/Dyadia-100x100.webp",
        "win_rate": 47.4,
        "pick_rate": 2.1,
        "ban_rate": 4.4,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "zill",
                "reason": "Zill có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Dyadia theo dữ liệu meta."
            },
            {
                "id": "roxie",
                "reason": "Roxie có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Dyadia theo dữ liệu meta."
            },
            {
                "id": "wonderwoman",
                "reason": "Wonder Woman có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Dyadia theo dữ liệu meta."
            },
            {
                "id": "lauriel",
                "reason": "Lauriel có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Dyadia theo dữ liệu meta."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "edras",
        "name": "Edras",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2025/11/edrashead-2-100x100.jpg",
        "win_rate": 50,
        "pick_rate": 24.6,
        "ban_rate": 20.1,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "marja",
                "reason": "Marja có thể là tướng duy nhất mà khắc chế được cả hai trạng thái của Edras, mặc dù Edras dạng Thần có thể giữ khoảng cách nhưng lượng sát thương mà hắn có thể gây ra không hề đủ áp lực cho Marja, nếu muốn chơi thì chỉ có ôm trụ mà thôi."
            },
            {
                "id": "florentino",
                "reason": "Florentino tuy là tướng cận chiến nhưng lại có khả năng áp sát tuyệt vời, điều này rất phù hợp để khắc chế được tầm đánh xa của Edras dạng Thần. Thêm nữa Flo phục hồi máu từ chiêu liên tục nên khá cứng cáp, hoàn toàn có thể băng trụ nếu Edras chơi ôm."
            },
            {
                "id": "charlotte",
                "reason": "Charlotte cũng có khả năng áp sát vô cùng nhanh chóng, cấu rỉa liên tục và hồi phục mạnh sẽ khiến cho Edras dạng Thần tương đối khó chơi."
            },
            {
                "id": "paine",
                "reason": "Paine khắc Edras dạng thần cực kỳ cứng, bởi vì khả năng áp sát quá nhanh và bất ngờ của vị tướng này sẽ làm hắn không kịp trở tay. Dame của Edras to nhưng phòng thủ lại rất kém nên cực dễ bốc hơi khi bị Paine áp sát."
            },
            {
                "id": "nakroth",
                "reason": "Độ cơ động của Nakroth quá bá đạo sẽ khiến cho Edras không thể chơi nổi, bộ chiêu thức dạng Thần tương đối chậm chạp nên việc tấn công hoặc chạy trốn khỏi tay Nak thực sự khốn khổ."
            },
            {
                "id": "grakk",
                "reason": "Việc quan trọng nhất trong khi chơi Edras dạng Thần chính là giữ khoảng cách và dùng chiêu từ xa, việc đó sẽ cực kỳ bị hạn chế khi gặp phải một con Grakk luôn chực chờ kéo hắn về cho đồng đội làm thịt."
            },
            {
                "id": "aleister",
                "reason": "Aleister thực sự là khắc tinh cứng của Edras dạng Ma, chiêu 1 Khát vọng thôn phệ tuy miễn được khống chế nhưng lại không có tác dụng với áp chế cứng nên Edras gần như không có cửa chơi game khi gặp phải Aleister."
            },
            {
                "id": "violet",
                "reason": "Violet có tầm tay dài, khả năng lăn lộn giữ khoảng cách và dame cũng khá sốc khi đủ đồ – đây đều là những yếu tố rất phù hợp để đặc trị sức mạnh cận chiến từ Edras."
            },
            {
                "id": "hayate",
                "reason": "Hayate có thể lướt liên tục giữ khoảng cách không cho Edras áp sát, kèm theo khả năng cấu rỉa bằng sát thương chuẩn cực đau. Thậm chí bạn có thể cầm Hayate đi top để đè đường Edras ngay từ đầu trận nếu team của bạn đã có đủ tanker."
            },
            {
                "id": "arum",
                "reason": "Arum cũng có áp chế cứng như Aleister chính là thứ mà Edras dạng Ma sợ nhất vì chiêu 1 Khát vọng thôn phệ của hắn không thể miễn nhiễm được, lao vào giao tranh mà ăn cái chiêu cuối Arum vào mồm là buông tay luôn."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "elandorr",
        "name": "Eland'orr",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Elandorr-100x100.webp",
        "win_rate": 47.6,
        "pick_rate": 29.5,
        "ban_rate": 49.5,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "zill",
                "reason": "Zill có thể dùng khả năng lướt và chiêu cuối để lao vào bất ngờ rồi liên tục bám theo gây sát thương bất chấp các kỹ năng cơ động của Eland’orr, sau đó nhanh chóng kết liễu hắn trước khi hắn phản công."
            },
            {
                "id": "nakroth",
                "reason": "Dùng kỹ năng lướt để liên tục né tránh chiêu thức của Eland’orr đồng thời tiếp cận gây sát thương khiến hắn khó có thể chống đỡ. Trong trường hợp Eland’orr quá xanh, bạn có thể lên semi cho Nakroth là chắc chắn đè được hắn."
            },
            {
                "id": "ryoma",
                "reason": "Ryoma có thể combo gây dame cực mạnh từ xa, ép góc khiến Eland’orr mất lợi thế khoảng cách. Khi có cơ hội, Ryoma lập tức dồn sát thương để loại bỏ Eland’orr nhanh chóng. Lưu ý sử dụng chiêu 2 gây choáng Eland’orr cho chính xác nếu không rất dễ bị hắn bật ngược lại."
            },
            {
                "id": "aleister",
                "reason": "Aleister sở hữu combo khống chế cực mạnh khiến Eland’orr không thể nhảy múa, lưu ý cần có đồng đội xung quanh để có thể dễ dàng phối hợp nhanh chóng tiêu diệt hắn."
            },
            {
                "id": "veera",
                "reason": "Chiêu 2 Hôn Gió gây choáng từ xa sẽ biến độ cơ động của Eland’orr trở thành trò hề, sau đó tạo cơ hội cho Veera cùng đồng đội dồn sát thương đưa hắn ta về thành dưỡng sức. Một điểm quan trọng cần nhớ là hãy núp bụi hoặc dùng chiêu một cách bất ngờ để tránh bị Eland’orr dùng chiêu 2 Điệp vũ chặn."
            },
            {
                "id": "arum",
                "reason": "Khi cầm Arum thì bạn chỉ cần giữ chiêu cuối và kiên nhẫn đợi Eland’orr lao vào hoặc có thể chủ động dùng Tốc Biến bay lên áp chế luôn cho đồng đội tấn công thì hắn ta khó mà sống được chứ đừng nói đến chuyện bay bay bướm bướm."
            },
            {
                "id": "stuart",
                "reason": "Chiêu 2 miễn nhiễm sát thương vật lý của Stuart là ác mộng đối với Eland’orr vì vậy Stuart có thể dễ dàng né tránh lượng sát thương từ hắn ta rồi trả dame cực mạnh, ép hắn phải lui về hoặc bị hạ gục."
            },
            {
                "id": "valhein",
                "reason": "Lực tay và tốc độ dồn dame của thánh Van Heo luôn nằm trong top đầu các vị tướng xạ thủ, nên việc sốc chết Eland’orr mà không cho hắn chẳng kịp bay nhảy gì là điều hoàn toàn dễ hiểu."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "elsu",
        "name": "Elsu",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Elsu-100x100.webp",
        "win_rate": 35.3,
        "pick_rate": 11.9,
        "ban_rate": 5.3,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "violet",
                "reason": "Sự lả lướt từ chiêu 1 và khả năng dồn sát thương nhanh khiến Violet có thể dễ dàng né tránh các cú ngắm bắn Viễn trình kích , đồng thời phản công tiêu diệt Elsu."
            },
            {
                "id": "slimz",
                "reason": "Kỹ năng ném lao gây choáng tầm xa của Slimz sẽ khiến Elsu phải rất cẩn thận khi chọn vị trí để dùng chiêu 2 Viễn trình kích Elsu rất tốt, ngoài ra khả năng cơ động và sốc dame sẽ giúp vị tướng này nhanh chóng hạ gục Elsu."
            },
            {
                "id": "helen",
                "reason": "Khả năng hồi máu và tạo giáp liên tục của Helen sẽ vô hiệu hóa sát thương cấu rỉa của Elsu, cấu bao nhiêu hồi lại cho đồng đội bấy nhiêu là tự nhiên Elsu phế hơn rất nhiều."
            },
            {
                "id": "gildur",
                "reason": "Khả năng gây choáng từ xa của Gildur khiến Elsu cực kì khó né vì hắn phải dừng lại ngắm bắn nhiều, thêm lớp giáp ảo và chiêu cuối có thể giúp vị tướng này chắn đạn và bắt dính Elsu cho đồng đội tấn công."
            },
            {
                "id": "paine",
                "reason": "Khả năng áp sát từ xa cực mạnh mẽ với sát thương lớn của Paine khắc chế cứng các pha ngắm bắn từ xa của Elsu, nhiều khi đạn chưa kịp bay ra khỏi nòng súng thì hắn ta đã lên bảng đếm số với cái bóng của Paine rồi."
            },
            {
                "id": "aoi",
                "reason": "Khi chọn tướng đi rừng để khắc chế Elsu, điều quan trọng nhất là phải thật cơ động để có thể tiếp cận hắn từ khoảng cách xa và không còn gì phù hợp hơn chiêu đu dây của Aoi."
            },
            {
                "id": "nakroth",
                "reason": "Tuy Nak dồn sát thương chưa phải thuộc dạng top nhưng độ cơ động thì chắc chắn xếp vào hàng đầu Liên Quân, vì vậy để việc Nakroth có thể liên tục áp sát rồi bắt Elsu phải đếm số là khá dễ dàng."
            },
            {
                "id": "yue",
                "reason": "Những lúc Elsu ngồi ngắm bắn sẽ trở thành điểm yếu chí mạng của hắn ta trong mắt Yue, Một cái cắt cường hóa từ vị tướng này sẽ khiến Elsu bốc hơi ngay lập tức mà không kịp làm gì khác."
            },
            {
                "id": "iggy",
                "reason": "Tầm ngắm bắn của Elsu rất xa nhưng không xa hơn được chiêu cuối Iggy. Một điểm nữa phạm vi gây sát thương của Hỏa Bạo rất rộng nên khó cho Elsu né kể cả hắn ta sử dụng chiêu 3 Giật bắn giật về."
            },
            {
                "id": "raz",
                "reason": "Raz với khả năng áp sát kèm dồn dame nhanh cũng là một sự lựa chọn hợp lý để khắc chế Elsu, chỉ có điều nếu Elsu kiểm soát tầm nhìn tốt thì vị tướng này hơi khó để di chuyển đến gần hắn ta."
            },
            {
                "id": "max",
                "reason": "Chiêu cuối định vị mục tiêu từ xa giúp Max dễ dàng truy đuổi và tiêu diệt Elsu kể cả hắn ta có chạy đến tận chân trời góc bể. Nếu chơi Max bạn nên cầm theo Tốc Biến để sẵn sàng dí theo khi hắn ta sử dụng chiêu 3 Giật bắn giật về."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "enzo",
        "name": "Enzo",
        "main_role": "Jungle",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Enzo-100x100.webp",
        "win_rate": 42.5,
        "pick_rate": 14,
        "ban_rate": 14.2,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "florentino",
                "reason": "Khi cầm Flo, bạn chỉ cần lưu ý lướt chiêu 3 cho chuẩn xác để kích hoạt miễn khống, sau đó liên tục múa hoa gây choáng, dồn sát thương nhanh chóng sẽ giúp vị tướng này dễ dàng làm gỏi Enzo."
            },
            {
                "id": "toro",
                "reason": "Toro chính là khắc chế cứng của Enzo. Sở hữu độ chống chịu cực cao cùng các kỹ năng miến khống, Toro dễ dàng di chuyển cao để che chắn đồng đội khỏi những pha móc của Enzo, khiến hắn ta áp sát cũng không được chạy cũng không xong."
            },
            {
                "id": "cresht",
                "reason": "Cresht về cơ bản cũng giống như Toro. Khi kích hoạt chiêu cuối biến hình, Cresht có thể tạo ra lớp giáp lớn và khống chế diện rộng, dễ dàng bảo vệ đồng đội khỏi khả năng móc và dồn sát thương của Enzo."
            },
            {
                "id": "gildur",
                "reason": "Gildur với một đống gây choáng và đẩy lùi sẽ dễ dàng khống chế và ép góc Enzo, khiến hắn không thể tìm được cơ hội tiếp cận mục tiêu quan trọng. Thậm chí nếu Enzo lên full dame thì rất có thể sẽ bị hạ gục bởi sát thương phép không nhỏ từ vị tướng này."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "erin",
        "name": "Erin",
        "main_role": "AD",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Erin-100x100.webp",
        "win_rate": 51.5,
        "pick_rate": 10.6,
        "ban_rate": 12.2,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "violet",
                "reason": "Violet có thể liên tục giữ khoảng cách bằng chiêu 1 lộn nhào rồi trả lại sát thương cực lớn, khiến Erin khó lòng gây áp lực lên vị tướng này. Nhiều khi chỉ cần dính 1 lần lộn rồi bắn từ Violet là Erin có thể bay nửa cây máu."
            },
            {
                "id": "telannas",
                "reason": "Vị tướng này có tầm đánh xa vượt trội hơn hẳn Erin và khả năng làm chậm liên tục khiến cô ta gặp rất nhiều khó khăn khi cố gắng trả sát thương hoặc chạy trốn."
            },
            {
                "id": "grakk",
                "reason": "Dùng chiêu thức kéo từ xa chính xác để kéo Erin khỏi đội hình của cô ta, kết hợp cùng chiêu cuối hút liên tục để khống chế cô ta. Khi gặp phải Grakk, Erin sẽ không thể di chuyển một cách tự do được nữa."
            },
            {
                "id": "thane",
                "reason": "Khi cầm Thane bạn hãy chủ động đứng tuyến đầu, dùng tấm thân trâu bò và các kỹ năng khống chế mạnh liên tục che chắn rồi ép góc Erin, bảo vệ và kiến tạo cơ hội cho đồng đội hạ gục cô ta."
            },
            {
                "id": "cresht",
                "reason": "Khi biến hình với chiêu cuối, Cresht trở nên cực trâu với lượng giáp lớn và khả năng khống chế diện rộng, giúp vị tướng này thoải mái mà che chắn cho đồng đội khỏi sát thương từ Erin đồng thời làm chậm và tìm cách tiêu diệt cô ta."
            },
            {
                "id": "aoi",
                "reason": "Sở hữu khả năng áp sát nhanh chóng, dồn sát thương mạnh mẽ và né tránh chiêu tốt, giúp Aoi dễ dàng kết liễu Erin mà không gặp nhiều nguy hiểm. Lưu ý là bạn có thể đu nhưng không xuống vội để câu Quả cầu băng sương từ Erin trước."
            },
            {
                "id": "murad",
                "reason": "Murad sẽ dễ dàng khắc chế được Erin trước giai đoạn cuối trận, với khả năng lướt đến từ xa và cấu rỉa sát thương liên tục. Murad sẽ khiến tiến trình tăng tiến sức mạnh của Erin chậm hơn rất nhiều."
            },
            {
                "id": "krixi",
                "reason": "Krixi có sải tay dài, hất tung và sốc sát thương mạnh mẽ, sẽ dễ dàng hạ gục được Erin trong một combo mà không quá sợ cô ta tiếp cận phản công."
            },
            {
                "id": "liliana",
                "reason": "Với khả năng biến hóa linh hoạt giữa cấu rỉa từ xa và dồn sát thương cận chiến, Liliana sẽ có thể tùy tình huống mà tấn công Erin từ xa hoặc chọn thời điểm phù hợp áp sát sốc chết cô ta."
            },
            {
                "id": "omen",
                "reason": "Omen với chiêu cuối khóa chân Erin, khiến cô ta không thể thoát thân tạo cơ hội cho đồng đội dồn sát thương nhanh chóng. Ngoài ra độ chống chịu của Omen khá cao nên không quá sợ bị sốc chết bởi Erin."
            },
            {
                "id": "skud",
                "reason": "Skud nổi tiếng trâu bò, cho Erin bắn nửa ngày cũng chưa chết, nhưng khi bị Skud đấm lại thì Erin có khi đột tử tại chỗ. Vì vậy các bạn có thể pick vị tướng này đi top hoặc đi rừng để khắc chế Erin đều rất hiệu quả."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "errol",
        "name": "Errol",
        "main_role": "Jungle",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Errol-100x100.webp",
        "win_rate": 33.3,
        "pick_rate": 2.1,
        "ban_rate": 0.3,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "boltbaron",
                "reason": "Bolt Baron sử dụng kỹ năng lướt liên tục có thể thả diều và né hất tung từ Errol. Chủ động giữ khoảng cách, tận dụng tầm đánh xa để cấu máu trước khi Errol kịp áp sát rồi tận dụng cơ hội hắn hết chiêu để dí theo hạ gục đối phương."
            },
            {
                "id": "allain",
                "reason": "Với khả năng hồi phục và gây sát thương liên tục, Allain có thể chủ động tiếp cận và trao đổi sát thương tốt với Errol. Sử dụng chiêu cuối vào thời điểm Errol dồn sát thương để né đi rồi phản công loại bỏ hắn."
            },
            {
                "id": "florentino",
                "reason": "Florentino khắc chế Errol nhờ vào combo hoa liên tục, khả năng gây sát thương chuẩn và hồi phục nhanh. Khi giao tranh, chủ động dùng chiêu cuối chính xác để miễn nhiễm pha hất tung, khiến Errol không thể phản công hiệu quả."
            },
            {
                "id": "charlotte",
                "reason": "Khả năng miễn khống chế, hồi phục và dồn sát thương mạnh giúp Charlotte dễ dàng giành lợi thế khi tay đôi với Errol. Chú ý đánh nhấp nhả ra vào hợp lý để cho Errol không có cơ hội dồn sát thương lên bạn."
            },
            {
                "id": "zuka",
                "reason": "Chuỗi chiêu thức lả lướt liên tục và khả năng khống chế cũng như tạo giáp ảo của Zuka là lợi thế lớn khi đối đầu với Errol. Liên tục sử dụng kỹ năng để né tránh sát thương và các cú hất tung rồi phản công tiêu diệt Errol khi hắn hết kỹ năng quan trọng."
            },
            {
                "id": "yan",
                "reason": "Với khả năng chống chịu tốt, gây sát thương và né tránh hiệu quả, Yan có thể dễ dàng tiêu diệt Errol. Chủ động né tránh chiêu thức quan trọng của Errol, sau đó phản công quyết liệt để đưa hắn lên bảng đếm số."
            },
            {
                "id": "thane",
                "reason": "Sức chống chịu trâu bò và khống chế mạnh mẽ của Thane giúp con bài hỗ trợ này dễ dàng kiểm soát Errol trong giao tranh. Chủ động hất tung hoặc đẩy Errol ra ngay khi hắn lao vào, bảo vệ đồng thời tạo cơ hội cho đồng đội dồn sát thương cho hắn 1 vé về bệ đá cổ."
            },
            {
                "id": "hayate",
                "reason": "Sử dụng các chiêu lướt và lượng sát thương chuẩn cực lớn, Hayate có thể vừa liên tục giữ khoảng cách an toàn vừa trả sát thương liên tục, hạn chế tối đa khả năng áp sát dồn dame của Errol."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "fennik",
        "name": "Fennik",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Fennik-100x100.webp",
        "win_rate": 48.6,
        "pick_rate": 24.6,
        "ban_rate": 5.3,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "telannas",
                "reason": "Với tầm đánh vượt trội hơn hẳn và khả năng làm chậm liên tục, Tel’Annas khiến Fennik rất khó áp sát và dễ dàng bị hạ gục trước khi kịp phản ứng. Khi đủ đồ Tel’Annas chỉ cần giữ cự ly đủ xa rồi bắn vài cái là Fennik ngắc ngoải."
            },
            {
                "id": "stuart",
                "reason": "Stuart sở hữu khả năng dồn sát thương mạnh và di chuyển linh hoạt, đặc biệt chỉ cần kích hoạt chiêu 2 miễn sát thương vật lý khi bị Fennik dồn dame là vị tướng xạ thủ này sẽ dễ dàng outplay được Fennik."
            },
            {
                "id": "omega",
                "reason": "Sử dụng các kỹ năng khống chế, đặc biệt là chiêu cuối đẩy lùi liên tục ngay khi Fennik có dấu hiệu tiếp cận đồng đội. Duy trì áp lực và ép góc liên tục để giảm khả năng thả diều của nó. Khi chơi tốt thì Omega có thể dí Fennik về đến tận nhà."
            },
            {
                "id": "keera",
                "reason": "Chủ động di chuyển vượt địa hình bất ngờ áp sát dồn dame đúng thời điểm Fennik mới dùng xong chiêu 2 Nẹt điện , sau khi combo xong hãy lùi về tránh bị Fennik phản công nhưng thường là nếu bạn combo chuẩn thì nó đã bốc hơi rồi."
            },
            {
                "id": "paine",
                "reason": "Căn thời điểm hợp lý nhanh chóng dùng kỹ năng lao vào bất ngờ từ khoảng cách xa để nhanh chóng áp sát và dồn sát thương mạnh, tiêu diệt Fennik trước khi nó kịp di chuyển hoặc phản công. Với hiệu ứng câm lặng Paine sẽ không khó khăn để hạ gục Fennik trong một combo."
            },
            {
                "id": "zata",
                "reason": "Zata có chiêu cuối giúp áp sát Fennik liên tục để câu lướt Nẹt điện từ nó sau đó bay lên né sát thương đồng thời vả một tấn sát thương vào mồm là Fennik lên bảng đếm số ngay."
            },
            {
                "id": "arthur",
                "reason": "Con cáo Fennik sợ nhất là bị dính khống chế rồi áp sát dồn dame, vì vậy Arthur với khả năng áp sát nhanh rồi gây câm lặng rồi bồi thêm chiêu cuối vừa sốc sát thương vừa hất tung là Fennik đi bụi. Lưu ý hãy vòng đằng sau, núp bụi hoặc dùng Tốc Biến để Arthur dễ dàng tiếp cận Fennik hơn."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "florentino",
        "name": "Florentino",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Florentino-100x100.webp",
        "win_rate": 50,
        "pick_rate": 12.6,
        "ban_rate": 38.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "marja",
                "reason": "Khi cầm Marja bạn hãy khéo léo nối chiêu 2 để hút dame Florentino rồi dùng chiêu 1 và chiêu 3 đúng thời điểm né đi những nhịp thả hoa và chiêu cuối Tài hoa của hắn ta là có thể gây rất nhiều khó khăn cho Flo."
            },
            {
                "id": "boltbaron",
                "reason": "Thực tế Florentino gần như mạnh nhất khi solo đường Tà Thần nhưng hắn sẽ gặp rất nhiều khó khắn khi gặp phải Bolt Baron. Với sải tay dài, khả năng spam lướt liên tục kèm chiêu 3 miễn khống chế, Bolt Baron rất dễ dàng né đi các nhịp tung hoa từ Flo rồi cấu rỉa ngược lại hắn."
            },
            {
                "id": "murad",
                "reason": "Dù bạn cầm Murad đi top hay đi rừng thì cũng nên tận dụng tối đa khả năng lướt đi từ vị trí an toàn rồi combo cấu rỉa Florentino xong lại giật về thật nhiều lần để hạ gục hoặc ít nhất là làm hắn không thể farm lính được. Lưu ý khi tiếp cận Flo phải xử lý cẩn thận nếu bị trúng hoa sẽ mất hoàn toàn lợi thế."
            },
            {
                "id": "aleister",
                "reason": "Chiêu 3 Tài hoa của Florentino có miễn khống chế nhưng không thể miễn nổi áp chế cứng của Aleister, chỉ lưu ý một điều là bạn hãy áp chế hắn khi có đồng đội ở gần hỗ trợ dồn dame nếu không khi hết thời gian Flo có thể múa chết ngược lại bạn luôn."
            },
            {
                "id": "arum",
                "reason": "Arum cũng có chiêu 3 khống chế cứng như Aleister nên rất phù hợp để pick khi muốn khắc chế Florentino, Khi cầm Arum thì bạn cũng nên lưu ý là chỉ áp chế hắn khi có đồng đội bên cạnh sẵn sàng dồn sát thương giúp bạn hạ gục Flo."
            },
            {
                "id": "baldum",
                "reason": "Nếu bạn muốn khắc chế Florentino trong combat, Baldum là một sự lựa chọn rất tốt, khi Flo vừa lướt chiêu 3 Tài hoa để kích hoạt miễn khống chuẩn bị múa thì bạn chỉ cần dùng chiêu cuối của Baldum nhốt hắn lại, cho đến khi thoát ra được thì miễn khống của hắn đã hết tác dụng là bồi thêm vài cái khống chế là Flo khỏi múa luôn."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "flowborn",
        "name": "Flowborn",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2026/04/Flowborn-100x100.webp",
        "win_rate": 47.9,
        "pick_rate": 2.1,
        "ban_rate": 4.9,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "stuart",
                "reason": "Khắc tinh lớn nhất của các Xạ thủ chính là vị tướng Stuart. Nhờ chiêu 2 miễn nhiễm hoàn toàn sát thương vật lý trong một thời gian ngắn, Stuart có thể dễ dàng outplay những đợt cấu rỉa hay dồn sát thương từ Flowborn. Khi đối phương hết chiêu, Stuart phản công bằng combo sốc dame trực diện khiến Flowborn không kịp trở tay."
            },
            {
                "id": "elsu",
                "reason": "Flowborn có lượng sát thương lớn nhưng tầm đánh bình thường, nên Elsu hoàn toàn có thể chọn cách núp từ thật xa để cấu rỉa. Với sải tay vượt trội từ Viễn Trình Kích (chiêu 2), Elsu có thể rút máu Flowborn từ khoảng cách an toàn mà Flowborn không tài nào chạm tới được."
            },
            {
                "id": "enzo",
                "reason": "Flowborn không thật sự quá cơ động nên rất dễ lọt vào tầm móc của Enzo, chỉ cần một cú sơ hở nhỏ là Flowborn sẽ bị móc rồi hất ngược về phía đội hình địch, hoàn toàn bất lực và trở thành con mồi ngon cho cả team dồn sát thương."
            },
            {
                "id": "arthur",
                "reason": "Mặc dù khá lù đù, nhưng Arthur lại là Đấu sĩ hoàn hảo để trị Flowborn nhờ độ trâu bò và sát thương ổn định. Chỉ cần tấp chiêu 1 lao tới câm lặng, kết hợp vòng kiếm chiêu 2 và chiêu cuối áp sát, Arthur có thể dễ dàng dồn ép, khiến Flowborn không thể giữ vị trí an toàn để xả chiêu"
            },
            {
                "id": "paine",
                "reason": "Với khả năng áp sát chớp nhoáng và câm lặng cực mạnh, Paine là cơn ác mộng đối với Flowborn. Một cú nhảy chiêu cuối chuẩn xác của Paine sẽ khiến Flowborn bị khóa mồm, không thể sử dụng bất kỳ kỹ năng hay phép bổ trợ nào để bỏ trốn và nhanh chóng nằm xuống trước lượng sát thương phép dồn vào."
            },
            {
                "id": "veera",
                "reason": "Vì Flowborn không có miễn khống chế, tầm đánh không quá xa kèm theo thanh máu giấy nên khi nhìn thấy Veera như nhìn thấy bố. Chỉ cần ăn một cái choáng từ Veera là Flowborn đã đủ mệt rồi chứ chưa cần nói đến cả combo."
            },
            {
                "id": "raz",
                "reason": "Raz có bộ chiêu thức làm chậm, hất tung liên tục sẽ phá vỡ hoàn toàn “nhịp” di chuyển của Flowborn. Những cú đá của Raz mang theo lượng sát thương phép cực khủng, đủ sức làm bốc hơi một tướng máu giấy như Flowborn chỉ trong một nốt nhạc, không cho hắn cơ hội bật chiêu để tạo khoảng cách."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "flowbornphep",
        "name": "Flowborn Phép",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2026/05/flowborn-phep-100x100.webp",
        "win_rate": 47.9,
        "pick_rate": 2.1,
        "ban_rate": 4.9,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "lorion",
                "reason": "Sở hữu độ cơ động cực cao và khả năng hồi phục mạnh mẽ, Lorion dễ dàng outplay, né tránh trọn vẹn chuỗi sát thương phép của Flowborn. Khả năng lao vào cực nhanh và cò quay hồi phục giúp Lorion trở thành cơn ác mộng thực sự với những con tướng máu giấy như Flowborn"
            },
            {
                "id": "zata",
                "reason": "Zata là khắc tinh cứng của những Pháp sư thiếu cơ động. Chỉ đơn giản là cứ có chiêu cuối là bay vào, Zata có thể đã khiến cho Flowborn không chơi game nổi vì chẳng có cách nào để chống lại cả"
            },
            {
                "id": "gildur",
                "reason": "Dù đi Mid hay Hỗ trợ, Gildur luôn mang lại sự khó chịu nhờ tầm cấu rỉa cực xa và hiệu ứng làm choáng liên tục từ Vụ Nổ Vàng. Lớp giáp ảo dày dặn giúp Gildur tự tin trao đổi chiêu thức, đồng thời liên tục làm gián đoạn nhịp độ xả sát thương của Flowborn từ khoảng cách an toàn."
            },
            {
                "id": "paine",
                "reason": "Với khả năng áp sát chớp nhoáng từ xa và hiệu ứng câm lặng cực kỳ khó chịu, Paine khiến Flowborn hoàn toàn bất lực. Không thể tung chiêu thức để tự vệ, vị Pháp sư máu giấy này sẽ nhanh chóng bốc hơi dưới lượng sát thương phép khổng lồ của Paine."
            },
            {
                "id": "nakroth",
                "reason": "Độ cơ động bậc nhất Liên Quân giúp Nakroth dễ dàng lách qua các kỹ năng định hướng của Flowborn. Bằng sự linh hoạt của mình, Nakroth có thể bọc hậu, bắt lẻ Flowborn và rút lui an toàn trước khi đội hình địch kịp thời hỗ trợ."
            },
            {
                "id": "enzo",
                "reason": "Sở hữu khả năng khống chế cứng từ xa, Enzo biến những tướng thiếu cơ động như Flowborn thành mục tiêu cố định hoàn hảo. Chỉ cần một cú móc chiêu 2 chuẩn xác, Enzo có thể hất văng Flowborn ra khỏi vị trí an toàn, quật về phía đồng đội và dứt điểm hắn ngay từ trước khi combat nổ ra."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "gildur",
        "name": "Gildur",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Gildur-100x100.webp",
        "win_rate": 33.3,
        "pick_rate": 4.2,
        "ban_rate": 1,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "veera",
                "reason": "Khả năng chống chịu của Gildur phần lớn đến từ khả năng tạo ra giáp ảo từ nội tại Bàn tay vàng , và khả năng này sẽ rất khó được kích hoạt khi dính phải chiêu 2 choáng cực lâu từ Veera, nên vị tướng này sẽ hạ gục hắn không quá khó khăn."
            },
            {
                "id": "chaugnar",
                "reason": "Chaugnar chính là tướng khắc chế cứng của Gildur, vì với độ trâu bò kèm khả năng giải khống chế cho toàn đội hình thì Gildur gần như phế hoàn toàn khi đi kèo hỗ trợ với vị tướng này."
            },
            {
                "id": "teemee",
                "reason": "TeeMee có thể dùng chiêu 2 để móc vào ngắt chiêu 3 Vương quốc vàng của Gildur, ngoài ra vị tướng này cũng có thể thoải mái kích hoạt chiêu 3 hồi sinh cho bản thân và đồng đội khi đang bị dính khống chế nên đây sẽ là một con bài khắc chế Gildur cực tốt ở vị trí hỗ trợ."
            },
            {
                "id": "alice",
                "reason": "Alice là một sự lựa chọn phổ biến cho vị trí support và khắc chế Gildur cũng rất hiệu quả vì sải tay dài hơn đồng thời sở hữu chiêu 1 gây choáng ngắt được khống chế từ Gildur."
            },
            {
                "id": "laville",
                "reason": "Một vị tướng xạ thủ hiếm hoi có chiêu thức miễn khống chế, Laville là sự lựa chọn tốt để pick khi bạn gặp phải một con tướng quá nhiều khống chế như Gildur."
            },
            {
                "id": "rourke",
                "reason": "Chiêu cuối của Rourke có khả năng xóa ngay lập tức kèm miễn khống chế trong một thời gian dài, ngoài ra vị tướng này nổi tiếng với lượng sát thương cận chiến cực lớn, Rourke đơn giản là chạy đến và hạ gục Gildur và hắn ta chỉ có thể buông tay bất lực."
            },
            {
                "id": "kilgroth",
                "reason": "Với một con tướng thiếu cơ động và sức mạnh chủ yếu dựa vào khống chế như Gildur, Kil’Groth chỉ việc dùng chiêu 3 để giải thoát bản thân khỏi bị choáng rồi liên tục quạt cây đinh ba vào mặt đối phương."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "goverra",
        "name": "Goverra",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2025/07/goverra-11-100x100.webp",
        "win_rate": 51,
        "pick_rate": 10.3,
        "ban_rate": 8.6,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "lauriel",
                "reason": "Tất cả điểm mạnh của Goverra đều bị Lauriel khắc chế hoàn toàn. Lauriel có thể dễ dàng né tránh hoặc trực tiếp tiêu diệt hết đám đệ tử của Goverra với phạm vi gây dame rộng, tiếp theo là combo liên tục tấn công trực tiếp vào sự thiếu cơ động của cô ta là xong."
            },
            {
                "id": "lorion",
                "reason": "Các chiêu thức của Lorion đều là gây dame xung quanh theo thời gian dài nên hoàn toàn có thể tấn công cả Goverra và đệ tử của cô ta. Cách chơi Lorion đơn giản là cứ bay thẳng vào mà đánh là Goverra rất khó chơi rồi."
            },
            {
                "id": "heino",
                "reason": "Tầm phóng giáo của Heino vừa xa hơn Goverra vừa có khả năng xuyên thấu mà dame lại cực to nữa. Tầm giữa game, một giáo có khi làm cả đàn đệ tử lẫn Goverra gần bốc hơi luôn. Chưa kể Heino có thể phục hồi trụ nên cực phù hợp để trị một con tướng chuyên đẩy đường như Goverra."
            },
            {
                "id": "azzenka",
                "reason": "Một vị tướng mà gặp càng nhiều mục tiêu càng thích chính là Azzen’Ka. Đàn đệ tử của Goverra sẽ làm trung gian để các cú nảy gây choáng hiệu quả hơn, đồng thời sự kém cơ động sẽ làm cô ta rất khó né tránh các combo từ Azzen’Ka."
            },
            {
                "id": "billow",
                "reason": "Chiêu 2 của Billow khi dùng ở vị trí có lính hoặc nhiều tướng địch chụm lại sẽ tích được nhiều nội tại hơn nên rất thích hợp để đặc trị đoàn quân Goverra. Thêm nữa Goverra đi bộ là chủ yếu nên cực kì khó thoát khỏi khả năng truy đuổi cực gắt từ Billow."
            },
            {
                "id": "butterfly",
                "reason": "Tốc độ áp sát và dí của Butterfly gần như là khét lẹt nhất Liên Quân mobile thì sao mà một con tướng độ cơ động gần như bằng 0 lại còn máu giấy như Goverra có thể thoát được. Một điểm đặc biệt nữa là bộ chiêu của But sẽ được reset khi diệt mục tiêu nên bọn đệ tử của Goverra sẽ là thứ khiến Butterfly có thể combo liên tục."
            },
            {
                "id": "kilgroth",
                "reason": "Các đệ tử máy của Goverra chính là miếng mồi ngon béo bở cho Kil’Groth tích nội tại tăng công vật lý mãi mãi, khi farm chán đệ rồi thì bật ultil lên dí luôn chủ là thơm. Lưu ý bạn nên lên đồ Kil’Groth theo hướng semi hoặc ít nhất một món kháng phép để chống bị đám đệ tử thân tín của cô ta cắn chết nhé."
            },
            {
                "id": "ybneth",
                "reason": "Bộ chiêu của Y’bneth rất phù hợp để dùng ở những chỗ có nhiều mục tiêu tập trung. Chiêu 1 sẽ dễ dàng được tái kích hoạt và chiêu 2 sẽ gây thêm dame và làm choáng nếu trúng nhiều đích, vì vậy đây chính là một sự lựa chọn tuyệt vời ở vị trí hỗ trợ nhằm khắc chế Goverra."
            },
            {
                "id": "laville",
                "reason": "Tầm tay dài và khả năng bắn lan đa mục tiêu biến Laville trở thành xạ thủ hàng đầu khi đối mặt với Goverra, khi có vài món đồ cơ bản là bạn có thể tự tin bật miễn khống chế lên rồi bắn tan nát cả chủ lẫn tớ."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "grakk",
        "name": "Grakk",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Grakk.webp",
        "win_rate": 52.4,
        "pick_rate": 9.3,
        "ban_rate": 4.9,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "chaugnar",
                "reason": "Khả năng giải khống chế từ chiêu cuối “Vực hỗn loạn” giúp Chaugnar bảo vệ cả đội trước các pha kéo và hút diện rộng từ Grakk. Chủ động di chuyển cao che chắn cho team và dùng chiêu cuối đúng lúc khi Grakk hút để vô hiệu hóa hoàn toàn khả năng của hắn."
            },
            {
                "id": "gildur",
                "reason": "Gildur với khả năng gây choáng liên tục từ xa bằng chiêu thức “Vụ nổ vàng” có thể ép góc và phá chiêu cuối của Grakk. Ngoài ra Gildur có thể tương kế tựu kế để cho hắn ta kéo vào gần team địch rồi dùng chiêu cuối khống chế tất cả."
            },
            {
                "id": "baldum",
                "reason": "Baldum có thể sử dụng chiêu hất và chiêu cuối “Địa giam” để phá hút từ Grakk khỏi đội hình. Luôn luôn di chuyển che chắn trước mặt đồng đội để cản trở Grakk kéo những tướng quan trọng về."
            },
            {
                "id": "laville",
                "reason": "Laville có chiêu thức tạo lá chắn miễn nhiễm sát thương và khống chế, giúp dễ dàng tránh được các pha kéo bất ngờ từ Grakk. Chủ động giữ và dùng kỹ năng này mỗi khi Grakk chuẩn bị kéo để tự bảo vệ bản thân."
            },
            {
                "id": "elsu",
                "reason": "Khả năng tấn công từ khoảng cách cực xa bằng “Viễn trình kích” cho phép Elsu thoải mái tấn công mà không lo bị Grakk kéo. Đứng tại vị trí an toàn, luôn giữ khoảng cách và liên tục đặt mắt kiểm soát tầm nhìn xung quanh khiến Grakk trở nên bất lực."
            },
            {
                "id": "ilumia",
                "reason": "Ilumia sở ở hữu khả năng hất tung và gây choáng toàn bản đồ bằng chiêu 1 và chiêu cuối giúp Ilumia dễ dàng phá vỡ những tình huống hút của Grakk. Luôn để ý đến vị trí của hắn trên minimap để có thể giải thoát cho đồng đội khi thấy Grakk khống chế họ."
            },
            {
                "id": "rourke",
                "reason": "Với chiêu cuối miễn nhiễm tất cả khống chế thì Rourke có thể coi như Grakk không tồn tại, thậm chí bạn có thể dụ hắn kéo vào để tiếp cận chủ lực team địch rồi kích hoạt chiêu 3 giải khống và dồn dame mục tiêu."
            },
            {
                "id": "kilgroth",
                "reason": "Kil’Groth cũng không khác gì Rourke, bạn chỉ việc dùng chiêu 3 để giải thoát bản thân khi bị Grakk kéo vào hút sau đó liên tục cầm cây đinh ba chọc vào tướng chủ lực đối phương."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "hayate",
        "name": "Hayate",
        "main_role": "AD",
        "tier": "S+",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Hayate-100x100.webp",
        "win_rate": 53.1,
        "pick_rate": 34.4,
        "ban_rate": 22,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "stuart",
                "reason": "Tuy Hayate gây sát thương chuẩn nhưng đó là dame cộng thêm từ sát thương vậy lý nên vẫn sẽ bị chặn bới chiêu 2 của Stuart. Ngoài ra với khả năng cơ động và sát thương dồn cực nhanh, Stuart có thể tránh cấu rỉa từ Hayate và nhanh chóng dồn sát thương để kết liễu hắn."
            },
            {
                "id": "valhein",
                "reason": "Sở hữu khả năng sốc sát thương rất nhanh và choáng, Vanhein dễ dàng hạ Hayate nhanh chóng mà không để hắn cấu rỉa. Khi cầm Vanhein, bạn hãy quyết đoán dồn hết dame chứ không nên đánh nhấp nhả với Hayate."
            },
            {
                "id": "capheny",
                "reason": "Capheny có khả năng thay vừa đi chuyển vừa bắn nên sẽ dễ dàng vừa né Chuỗi phi tiêu vừa trả sát thương liên tục lên Hayate. Chỉ cần di chuyển hợp lý và bắn là Hayate sẽ rất khó để ăn được vị tướng này."
            },
            {
                "id": "alice",
                "reason": "Khả năng làm choáng từ xa, gây câm lặng của Alice sẽ làm Hayate cực kỳ khó di chuyển và bị ép góc. Lưu ý nên tung các chiêu thức sau khi Hayate lướt để tăng khả năng chính xác."
            },
            {
                "id": "gildur",
                "reason": "Liên tục làm choáng và gây sát thương từ xa bằng “Vụ nổ vàng”, giúp ngăn chặn Hayate cấu rỉa từ xa. Sử dụng chiêu cuối khống chế đúng lúc để phá chiêu cuối của Hayate khi hắn lao vào."
            },
            {
                "id": "veera",
                "reason": "Veera với khả năng gây choáng cực mạnh từ chiêu 2 và dồn sát thương nhanh bằng combo kỹ năng, dễ dàng khóa cứng và hạ gục Hayate. Dùng khống chế bất ngờ và đúng thời điểm để ngăn cản Hayate tiếp cận hoặc thoát thân."
            },
            {
                "id": "liliana",
                "reason": "Biến đổi linh hoạt giữa dạng người và hồ ly, Liliana có thể cấu rỉa hoặc áp sát bất ngờ, nhanh chóng dồn sát thương và hạ gục Hayate. Chủ động giữ khoảng cách, dùng chiêu thức dạng người để làm choáng trước khi chuyển sang dạng cáo để dứt điểm hắn ta."
            },
            {
                "id": "omen",
                "reason": "Hayate gây sát thương chuẩn nên khó có đấu sĩ nào có thể khắc chế được hắn ta, chỉ có giải pháp duy nhất là Omen. Hãy sử dụng chiêu cuối Sát Vực một cách bất ngờ hoặc phối hợp thêm Tốc Biến để bắt và dồn chết hắn ta."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "heino",
        "name": "Heino",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2025/05/heino-1-100x100.webp",
        "win_rate": 33.3,
        "pick_rate": 3.2,
        "ban_rate": 1.3,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "lauriel",
                "reason": "Bộ chiêu của Heino có thời gian hồi chiêu rất lâu vì vậy Lauriel rất dễ dàng gây sức ép lên hắn với khả năng spam skill liên tục. Chỉ cần khéo léo dùng chiêu 2 vừa né vừa rút ngắn khoảng cách rồi dồn sát thương liên tục khiến Heino không thể chạy nổi và lên bảng đếm số."
            },
            {
                "id": "yue",
                "reason": "Yue sở hữu tầm tay cực xa, dame sốc và hồi chiêu đều vượt trội hơn Heino nhiều. Cách chơi đơn giản là giữ khoảng cách và liên tục dồn sát thương vào Heino mà không cần tiếp cận. Khi Heino cố gắng lướt vào thì bạn chỉ cần dùng chiêu cuối đẩy hắn ra là xong."
            },
            {
                "id": "raz",
                "reason": "Heino có chiêu giữ mạng và khả năng hồi phục nhưng máu của hắn lại cực mỏng nên khá là khó thở nếu gặp phải con tướng pháp sư kiêm sát thủ như Raz, hãy chớp thời cơ tốt để combo một cách liên tục để Heino bị đẩy lùi liên tục không thể giật về và phải về thành dưỡng sức."
            },
            {
                "id": "nakroth",
                "reason": "Độ cơ động cực cao giúp Nakroth có thể né toàn bộ kỹ năng định hướng của Heino mà không gặp quá nhiều khó khăn. Khi Heino để lại dấu ấn trên bản đồ hãy lưu ý để sẵn sàng dí theo săn hắn."
            },
            {
                "id": "murad",
                "reason": "Heino tuy có chiêu lướt và giật về nhưng thực sự độ cơ động không phải quá cao nên Murad vẫn hoàn toàn có thể cấu rỉa hắn liên tục mà không hề sợ bị phản công. Có thể canh điểm Heino chuẩn bị giật về để chặn đầu trước bằng các pha lướt của mình."
            },
            {
                "id": "marja",
                "reason": "Marja nổi tiếng là một con tướng rất lì lợm và dây dưa cho nên cực kì khó cho Heino khi đối đầu, muốn tấn công thì không đủ dame mà chạy cũng không phải là dễ. Bạn hãy áp sát liên tục và nối dây để câu chiêu cuối Thiên mệnh thời không của Heino trước rồi dí theo hạ gục hắn."
            },
            {
                "id": "grakk",
                "reason": "Grakk là một tướng trợ thủ hiếm hoi có thể gây áp lực lên Heino vì khả năng kéo từ xa của mình, bạn có thể canh điểm hắn chuẩn bị quay trở lại bằng chiêu cuối Thiên mệnh thời không để lôi về cho đồng đội Mukbang."
            },
            {
                "id": "violet",
                "reason": "Khi chọn AD để khắc chế Heino thì quan trọng nhất là khả năng sốc dame nhằm hạ hắn một cách bất ngờ, không cho Heino kịp dùng chiêu cuối, và tất nhiên không có vị tướng xạ thủ nào sốc sát thương nhanh mạnh hơn Violet."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "helen",
        "name": "Helen",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Helen-100x100.webp",
        "win_rate": 50.9,
        "pick_rate": 9.1,
        "ban_rate": 8.1,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "nakroth",
                "reason": "Nakroth có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Helen theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "iggy",
        "name": "Iggy",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Iggy-e1724323882340-100x100.webp",
        "win_rate": 55.1,
        "pick_rate": 27.4,
        "ban_rate": 11.1,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "raz",
                "reason": "Khả năng áp sát dồn dame cực nhanh cùng với hiệu ứng hất tung, đẩy lùi liên tục tự bộ chiêu giúp Raz dễ dàng rút ngắn khoảng cách và hạ gục Iggy nhanh chóng. Chú ý nấp bụi hoặc dùng Tốc Biến để khiến hắn ta bất ngờ, tăng khả năng thành công."
            },
            {
                "id": "tulen",
                "reason": "Tulen với độ cơ động cao và lượng dame khổng lồ sẽ dễ dàng áp sát và dồn sát thương Iggy. Lướt liên tục vừa né chiêu vừa cấu rỉa, khi thấy hắn ta còn ít máu hãy ngay lập tức tung chiêu cuối “Lôi điểu” để dồn sát thương kết liễu Iggy nhanh chóng."
            },
            {
                "id": "zata",
                "reason": "Zata có thể liên tục né tránh sát thương từ Iggy đồng thời cấu rỉa bằng cách lướt các nhịp ngắn với chiêu cuối “Thiên dực”. Khi thấy đủ dame thì nhanh chóng bay lên dồn sát thương sẽ khiến Iggy lên bảng mà không thể phản kháng nhiều."
            },
            {
                "id": "darcy",
                "reason": "D’Arcy với khả năng khống chế và dồn sát thương mạnh mẽ từ combo giúp vị tướng này khắc chế hiệu quả Iggy. Chú ý sử dụng chiêu cuối chuẩn xác để khóa Iggy rồi kết liễu bằng bộ chiêu thức sốc dame cực khỏe."
            },
            {
                "id": "preyta",
                "reason": "Chiêu 2 “Bom hoại tử” của Preyta gây hiệu ứng làm chậm, choáng cực mạnh sẽ dễ dàng khiến một con tướng thiếu cơ động như Iggy càng khó chơi. Sau đó Preyta kích hoạt chiêu cuối để tăng mạnh sát thương và tốc độ di chuyển rồi khạc liên tục là hắn ta chỉ có chết."
            },
            {
                "id": "paine",
                "reason": "Paine có bộ chiêu thức tiếp cận mục tiêu nhanh và bất ngờ kèm hiệu ứng câm lặng khiến Iggy rất khó để chạy. Nhanh chóng dùng chiêu 2 ngay sau khi áp sát để Iggy không thể đẩy lùi bạn rồi dồn sát thương đưa hắn ta lên bảng đếm số."
            },
            {
                "id": "aoi",
                "reason": "Aoi với 2 lần đu dây sẽ cực kì khó để Iggy có thể chạy thoát kể cả khi có đẩy lùi. Sau khi tiếp cận thành công, dùng ngay chiêu 1 và chiêu cuối để gây sát thương cực nhanh, không cho hắn ta có cơ hội chạy thoát."
            },
            {
                "id": "helen",
                "reason": "Khả năng hồi máu và tạo giáp của Helen rất hiệu quả để bảo vệ đội hình khỏi các chiêu thức của Iggy khiến hắn ta cảm thấy cực bất lực. Helen gần như một cái bể máu di động, Iggy rỉa được bao nhiêu máu thì vị tướng này có thể hồi lại bấy nhiêu ngay lập tức."
            },
            {
                "id": "enzo",
                "reason": "Vì độ cơ động của Iggy gần như bằng 0 nên Enzo sẽ dễ dàng móc trúng rồi kéo Iggy khỏi vị trí an toàn, khiến Iggy rất khó di chuyển cao để thả bom. Lưu ý khi đã móc trúng hãy dùng chiêu cuối và chiêu 1 liên tục để bám sát không cho hắn ta đẩy lùi làm đứt xích."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "ignis",
        "name": "Ignis",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ignis.webp",
        "win_rate": 46.5,
        "pick_rate": 15.1,
        "ban_rate": 0.7,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "liliana",
                "reason": "Với sải tay dài và độ cơ động vượt trội khi hóa cáo, Liliana dễ dàng giành lợi thế trong việc né tránh các chiêu thức của Ignis. Khả năng sốc dame nhanh chóng cũng giúp vị tướng này hạ gục Ignis mà không còn cơ hội cho hắn dây dưa."
            },
            {
                "id": "lauriel",
                "reason": "Lauriel là thiên địch của những con tướng có cách chơi thả diều như Ignis. Bộ chiêu thức từ Lauriel sẽ giúp cô liên tục xóa bỏ khoảng cách, đặc biệt là Ignis không có chiêu lướt nên sẽ cực khó để thoát khỏi phạm vi chiêu cuối Đại Phán Xét"
            },
            {
                "id": "florentino",
                "reason": "Ignis mà nhìn thấy Florentino như nhìn thấy bố vì không thể giữ khoảng cách được với những pha đâm kiếm Xuất chúng liên tục, thêm nữa hiệu ứng làm choáng và chậm của Ignis hoàn toàn vô dụng trước miễn hiệu ứng từ chiêu cuối Tài hoa của Flo."
            },
            {
                "id": "violet",
                "reason": "Sở hữu sải tay cực dài từ những pha lộn bắn Đạn xuyên thấu Violet hoàn toàn out-nhây tầm chiêu thức của Ignis. Cô nàng có thể thoải mái cấu rỉa và dồn sát thương chí mạng từ khoảng cách an toàn, ép Ignis phải lùi về mà không cho hắn cơ hội tiếp cận đủ gần để combo chiêu 1 Hỏa Cầu + đánh thường."
            },
            {
                "id": "enzo",
                "reason": "Ignis không có khả năng lướt qua địa hình, biến hắn thành một con mồi rất dễ xơi cho Enzo. Chỉ cần áp sát và móc vào hắn, Enzo có thể dễ dàng hất tung và quật Ignis về phía đồng đội, dứt điểm nguồn sát thương chủ lực của địch ngay từ trước khi giao tranh tổng nổ ra."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "ilumia",
        "name": "Ilumia",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ilumia-100x100.webp",
        "win_rate": 51.5,
        "pick_rate": 11,
        "ban_rate": 5.1,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "lauriel",
                "reason": "Tuy Lauriel không có miễn khống chế nhưng bù lại vị tướng này có khả năng né chiêu cực tốt, đặc biệt khi chiêu của Ilumia khá là chậm. Thêm nữa khả năng truy đuổi và áp sát từ Lauriel hiệu quả vô cùng nên sẽ gây áp lực cực nhiều cho Ilumia."
            },
            {
                "id": "rourke",
                "reason": "Với chiêu cuối giải kèm miễn khống cực lâu, Rourke hoàn toàn có thể vượt qua chuỗi chiêu khống chế rồi tiếp cận và hạ gục Ilumia với các phát bắn cận chiến dame khủng long của mình."
            },
            {
                "id": "kilgroth",
                "reason": "Kil’Groth có chiêu cuối miễn khống còn bá đạo hơn cả Rouker vì không sợ bị hết hiệu lực khi nhận dame từ đối phương. Một điểm chí mạng nữa là sự thiếu cơ động của Ilumia sẽ tạo lợi thế cho Cá Chà Bặc quạt cây đinh ba của mình liên tục."
            },
            {
                "id": "chaugnar",
                "reason": "Tất cả các tướng mạnh về khống chế đều rất ngán ngẩm Chaugnar vì khả năng giải khống diện rộng của nó. Một con Voi vừa đứng chắn dame vừa giải thoát đồng đội kịp thời sẽ biến Ilumia thành phế vật trong game."
            },
            {
                "id": "toro",
                "reason": "Con Trâu hỗ trợ này đúng là khắc tinh của Ilumia vì toàn bộ chiêu đều có khả năng miễn khống chế kèm theo độ dí mục tiêu cứ phải gọi là khét lẹt khiến Ilumia gần như không được chơi game."
            },
            {
                "id": "laville",
                "reason": "Với một con tướng full khống chế như Ilumia thì việc chọn xạ thủ để đối phó với nó chắc chắn cần phải có miễn khống và chỉ có Laville là phù hợp với yêu cầu này, tuy nhiên dame từ Ilumia không phải nhỏ nên bạn vẫn cần né chiêu chứ không nên giơ mặt ra cho nó đánh nhé."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "ishar",
        "name": "Ishar",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ishar-100x100.webp",
        "win_rate": 50,
        "pick_rate": 6.5,
        "ban_rate": 4.6,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "arum",
                "reason": "Arum sử dụng chiêu cuối để áp chế Ishar khiến nó không thể điều Tí Nị gây sát thương lên các mục tiêu quan trọng. Một điểm hay nữa là khi Tí Nị tấn công Arum, Ishar sẽ bị chịu sát thương này vị đặc tính của chiêu “Thú khốn”"
            },
            {
                "id": "teeri",
                "reason": "Teeri có khả năng giữ khoảng cách an toàn và các đòn đánh xuyên thấu lên cả Tí Nị và Ishar . Teeri dễ dàng vừa cấu rỉa vừa tránh né kỹ năng từ Ishar, khiến cô ta bị thả diều mà không thể tiếp cận hoặc gây sát thương hiệu quả."
            },
            {
                "id": "fennik",
                "reason": "Với tầm đánh xa, khả năng không bị chọn làm mục tiêu từ chiêu 2 “Nẹt điện” và các kĩ năng gây sát thương lan, Fennik dễ dàng né tránh và gây dame lên cả Ishar và Tí Nị. Hãy vừa giữ khoảng cách an toàn vừa tấn công là Ishar sẽ phải rơi vào thế bất lực."
            },
            {
                "id": "lauriel",
                "reason": "Bộ kỹ năng lặn và lướt liên tục sẽ giúp Lauriel dễ dàng né tránh bộ chiêu của Ishar và sát thương từ Tí Nị. Khi Ishar hụt chiêu cuối Sa Bàn Ma Thuật , Lauriel ngay lập tức tung combo dồn sát thương nhanh chóng đưa cô ta lên bảng đếm số."
            },
            {
                "id": "azzenka",
                "reason": "Ishar kém cơ động nên rất khó né được các combo từ Azzen’Ka, đặc biệt Tí Nị khi đứng gần Ishar sẽ làm cả 2 dễ bị choáng hơn bởi các đợt nảy từ chiêu 2 của vị tướng này. Thêm nữa Azzen’Ka có chiêu cuối dễ dàng đẩy Tí Nị ra khi bị nó áp sát rồi khống chế hạ gục cả chủ lẫn tớ."
            },
            {
                "id": "zata",
                "reason": "Zata với khả năng lướt liên tục kèm gây sát thương lớn từ chiêu cuối “Thiên dực” sẽ dễ dàng né tránh các chiêu thức khống chế Ishar đồng thời phản công. Cấu rỉa cho Ishar yếu máu rồi bỏ qua Tí Nị, bay vào dồn sát thương là có thể hạ gục Ishar."
            },
            {
                "id": "murad",
                "reason": "Murad cực kỳ hiệu quả khi khắc chế Ishar bằng khả năng bay vào từ xa và rút lui an toàn nên không sợ bị Tí Nị tấn công. Một vài lần combo từ Murad đủ cho thanh máu của Ishar bốc hơi."
            },
            {
                "id": "errol",
                "reason": "Errol sở hữu khả năng áp sát thẳng vào Ishar mà bỏ qua Tí Nị với chiêu cuối, ngoài ra chiêu 2 có thế hất tung cả chủ và tớ cùng một lúc. Khi Ishar tung chiêu cuối Sa Bàn Ma Thuật , Errol lập tức bay lên thoát ra đồng thời áp sát rồi sử dụng combo để hạ gục cô ta."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "jinna",
        "name": "Jinna",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Jinna-100x100.webp",
        "win_rate": 50.8,
        "pick_rate": 7.3,
        "ban_rate": 4.8,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "azzenka",
                "reason": "Sở hữu bộ chiêu thức toàn khống chế diện rộng hất tung, hóa đá, đẩy lùi các kiểu. Khi Jinna bật chiêu cuối Kết Giới Xá Lợi lao vào, Azzen’Ka chỉ cần thả chiêu cuối ra là có thể đẩy Jinna văng xa 30 mét, vô hiệu hóa hoàn toàn ý đồ càn quét của hắn."
            },
            {
                "id": "bonnie",
                "reason": "Khả năng trói chân từ chiêu 2 và hiệu ứng hút, làm choáng… liên tục từ chiêu cuối của Bonnie là công cụ tuyệt vời để giữ chân Jinna. Hắn sẽ không thể tận dụng được lượng tốc chạy cộng thêm từ chiêu cuối để tiếp cận đội hình của bạn."
            },
            {
                "id": "yue",
                "reason": "Đại diện cho lối chơi cấu rỉa tầm xa. Sải tay của Yue hoàn toàn vượt trội so với Jinna. Cô nàng có thể thoải mái tung chiêu xé toạc nửa cây máu của Jinna từ khoảng cách cực kỳ an toàn, khiến hắn không đủ lượng máu để tự tin bật chiêu cuối lao vào giao tranh. Kể cả khi Jinna có băng vào thì Yue cũng có thể dễ dàng đẩy hắn ra với chiêu cuối của mình."
            },
            {
                "id": "annette",
                "reason": "Thiên địch số 1 của các đội hình băng càn. Khi Jinna vừa bật chiêu cuối và lao tới, Annette chỉ cần dựng chiêu cuối Mắt Bão hất văng hắn ra xa. Jinna sẽ hoàn toàn bất lực ở vòng ngoài và lãng phí toàn bộ thời gian tác dụng của chiêu này."
            },
            {
                "id": "lumburr",
                "reason": "Lumburr là một con support full hiệu ứng, từ hất tung đến đẩy lùi sẽ khiến cho Jinna gần như bất lực, lối chơi băng càn của hắn gần như trở nên phế hoàn toàn khi liên tục bị quấy rối bởi Lumburr."
            },
            {
                "id": "arum",
                "reason": "Chỉ cần một chiêu cuối Thú Khốn áp chế không thể hóa giải, Arum sẽ biến pha lao vào dũng mãnh của Jinna thành một pha tự sát. Jinna sẽ bị trói chết tại chỗ ở tuyến đầu và nhanh chóng bốc hơi bởi hỏa lực dồn vào từ đồng đội của Arum."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "kahlii",
        "name": "Kahlii",
        "main_role": "Mid",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Kahlii.webp",
        "win_rate": 47,
        "pick_rate": 2.3,
        "ban_rate": 0.8,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "zata",
                "reason": "Với khả năng lướt từ chiêu cuối “Thiên dực”, Zata né dễ dàng bộ combo của Kahlii đồng thời áp sát nhanh chóng dồn sát thương, khiến cô ta công thì khó mà thủ cũng không xong."
            },
            {
                "id": "raz",
                "reason": "Raz có thể lướt liên tục vì tác dụng của nội tại giúp né tránh kỹ năng tầm xa của Kahlii rất dễ dàng, đồng thời cũng có thể nhanh chóng áp sát đẩy lùi kèm sốc dame liên tục để đưa cô ta lên bảng không quá khó khăn."
            },
            {
                "id": "liliana",
                "reason": "Liliana di chuyển cực kì linh hoạt từ việc chuyển đổi dạng, nên Kahlii dù muốn tấn công hay chạy trốn cũng trở nên vô cùng khó khăn. Hãy cấu rỉa từ xa với dạng người rồi nhanh chóng áp sát tung combo để dứt điểm với dạng cáo."
            },
            {
                "id": "theflash",
                "reason": "Với khả năng áp sát cực nhanh từ chiêu 1 hành trình siêu tốc nên Flash tiếp cận Kahlii rất dễ dàng, sau đó dùng chiêu cuối khống chế rồi dồn nốt combo là cô ta sẽ phải về thành dưỡng sức."
            },
            {
                "id": "boltbaron",
                "reason": "Bolt Baron có chiêu 1 và chiêu 3 đều có thể nhanh chóng rút gọn khoảng cách với Kahlii. Ngoài ra với lượng sát thương khá lớn kèm độ cơ động của vị tướng này thì việc chạy trốn hay phản công cũng đều rất khó khăn cho Kahlii."
            },
            {
                "id": "nakroth",
                "reason": "Tất cả chiêu của Nakroth đều có độ cơ động cực kì cao giúp vị tướng này dễ dàng né tránh và áp sát cũng như truy đuổi Kahlii. Thêm nữa lượng máu của Kahlii rất là giấy nên chẳng thể chịu được vài cú chém từ Nak."
            },
            {
                "id": "paine",
                "reason": "Hầu như con tướng pháp sư máu giấy nào cũng rất sợ Paine và Kahlii cũng không phải ngoại lệ, chỉ cần một combo tiếp cận gây câm lặng dồn sát thương là cô ta bốc hơi ngay mà chẳng thể giãy nổi."
            },
            {
                "id": "aoi",
                "reason": "Sử dụng chiêu 2 “Long trảo” đu tường áp sát bất ngờ, Aoi nhanh chóng tiếp cận và tung combo kỹ năng dồn sát thương khiến Kahlii không kịp phản ứng. Chú ý giữ 2 nhịp đu đề phòng cô ta còn Tốc Biến"
            },
            {
                "id": "elandorr",
                "reason": "Eland’orr vừa cơ động cao vừa có sải tay dài nên Kahlii có muốn thoát khỏi tay vị tướng này gần như bất khả thi. Vừa dùng bươm bướm bay nhảy né tránh vừa truy đuổi đánh thường liên tục sẽ khiến Kahlii cực kì bất lực."
            },
            {
                "id": "enzo",
                "reason": "Kahlii rất thiếu cơ động nên rất dễ bị Enzo móc rồi hất về bị trí bất lợi, thậm chí có thể dồn chết cô ta luôn nếu Enzo lên semi hoặc full sát thương."
            },
            {
                "id": "grakk",
                "reason": "Cũng giống như Enzo thì Grakk có thể kéo trúng Kahlii không quá khó khăn vì cô ta không có chiêu lướt. Chỉ cần lưu ý di chuyển qua những góc khuất hoặc núp bụi để tiếp cận mà không bị Kahlii phát hiện từ sớm."
            },
            {
                "id": "violet",
                "reason": "Vì Kahlii có tầm tay rất dài nên khi chọn AD khắc chế được cô ta thì chỉ có Violet. Lí do là vị tướng này sở hữu chiêu lộn giúp né tránh và rút gọn khoảng cách với Kahlii, ngoài ra tầm chiêu cuối của Violet cũng rất xa và có lượng dame sốc để hạ gục Kahlii."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "kaine",
        "name": "Kaine",
        "main_role": "Jungle",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Kaine-100x100.webp",
        "win_rate": 47.4,
        "pick_rate": 6.3,
        "ban_rate": 2,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "fennik",
                "reason": "Nội tại của Fennik có khả năng làm Kaine phải lộ diện khi đang tàng hình, hoặc nếu bị hắn ta áp sát thi sử dụng chiêu 2 “Nẹt điện” để dễ dàng nới khoảng cách và trả sát thương liên tục hạ gục Kaine."
            },
            {
                "id": "lindis",
                "reason": "Chiêu 1 “Nguyệt quang” có thể chủ động phát hiện tàng hình và chiêu 2 “Nguyệt vực” khiến kẻ địch đạp phải bẫy sẽ bị lộ diền sẽ khiến Kaine không thể nào áp sát được Lindis mà không bị vị tướng này phát hiện ra rồi dồn dame trước."
            },
            {
                "id": "omen",
                "reason": "Omen với chiêu cuối “Sát vực” trói chặt Kaine, hạn chế tối đa khả năng cơ động và tàng hình. Sau khi trói được Kaine, Omen dồn sát thương nhanh chóng để kết liễu hắn. Ngoài ra với chiêu 2 miễn thương thì Kaine gần như không thể dồn chết được vị tướng này."
            },
            {
                "id": "max",
                "reason": "Chiêu cuối “Rađa đạn đạo” của Max dễ dàng phát hiện và theo dấu Kaine dù hắn ở bất kỳ vị trí nào trên bản đồ. Dùng kỹ năng này ngay khi nghi ngờ hắn đang chuẩn bị bắt một đồng đội nào đó nhằm phá vỡ kế hoạc đó đồng thời tới phối hợp tiêu diệt Kaine nhanh chóng."
            },
            {
                "id": "ilumia",
                "reason": "Toàn bộ kỹ năng của Ilumia đều có khả năng phá Kaine rất tốt, đặc biệt chiêu cuối “Thiên phạt” có thể phát hiện và làm choáng hắn ta từ xa, hiệu quả cao khi ngăn cản và tiêu diệt Kaine."
            },
            {
                "id": "arum",
                "reason": "Luôn di chuyển gần chủ lực và sãn sàng sử dụng chiêu cuối “Thú khốn” để trói chặt Kaine khi vừa xuất hiện, khiến hắn mất khả năng di chuyển và dễ dàng bị đồng đội của vị tướng này tiêu diệt nhanh chóng."
            },
            {
                "id": "krizzix",
                "reason": "Khả năng phát hiện tướng tàng hình từ chiêu cuối giúp Krizzix và dồng đội dễ dàng phát hiện ra vị trí của Kaine, đồng thời vị tướng này cũng có thể làm cho đồng đội tàng hình để Kaine không biết tấn công vào đâu."
            },
            {
                "id": "stuart",
                "reason": "Stuart chỉ cần bật chiêu 2 miễn nhiễm stvl khi bị Kaine áp sát, sau đó dồn dame ngược lại là có thể nhanh chóng tiêu diệt hắn ta. Có thể khéo léo sử dụng chiêu cuối giữ khoảng cách với Kaine trong trường hợp chiêu 2 đã dùng rồi."
            },
            {
                "id": "elsu",
                "reason": "Elsu có chiêu 1 đặt bẫy phát hiện tàng hình kèm tầm đánh cực xa từ chiêu 2 “Viễn trình kích”, dễ dàng phát hiện và khiến Kaine khó có thể tiếp cận. Liên tục giữ khoảng cách xa và nếu bị hắn ta áp sát thì chỉ việc dùng chiêu cuối giật lùi lại là Kaine bó tay."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "keera",
        "name": "Keera",
        "main_role": "Jungle",
        "tier": "S+",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Keera-100x100.webp",
        "win_rate": 37.5,
        "pick_rate": 19.6,
        "ban_rate": 15.8,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "omen",
                "reason": "Chống chịu tốt nhờ chiêu 2 miễn thương, kéo rồi khóa cứng từ các chiêu còn lại là những gì mà Keera rất sợ, và đây chính xác là điều mà Omen có. Rình Keera lao vào hoặc sử dụng Tốc Biến chủ động bay đến nhốt lại rồi dồn dame là có thể khắc chế được cô ta."
            },
            {
                "id": "roxie",
                "reason": "Roxie có tốc độ di chuyển khá nhanh và độ chống chịu cao, vì vậy có thể chủ động áp sát Keera rồi dùng chiêu cuối “Keo lửa” để kéo và vô hiệu hóa hoàn toàn khả năng cơ động rồi hạ gục cô ta."
            },
            {
                "id": "aleister",
                "reason": "Áp chế cứng mạnh mẽ từ chiêu cuối “Ngục tù vĩnh hằng” giúp Aleister giữ chân Keera tại chỗ và vô hiệu hóa hoàn toàn khả năng cơ động và biến cô ta thành phế vật. Khi Keera bị khóa cứng, đồng đội của Aleister dễ dàng dồn sát thương và kết liễu."
            },
            {
                "id": "bonnie",
                "reason": "Keera tuy là cơ động nhưng không hề có chiêu lướt xa nên rất dễ bị dính khống chế liên tục từ Bonnie. Khả năng trói, làm choáng và gây sát thương diện rộng từ bộ chiêu thức của vị tướng này sẽ cản trở, thậm chí tiêu diệt luôn Keera khi cô ta đang tìm cách áp sát hoặc rút lui."
            },
            {
                "id": "arum",
                "reason": "Arum có chiêu cuối “Thú khốn” để trói chân Keera, ngăn cô ta tiếp cận chủ lực hoặc thoát thân. Arum còn rất cứng cáp và có khả năng hồi phục tốt, giúp vị tướng này thoải mái di chuyển cao để sãn sàng áp chế Keera."
            },
            {
                "id": "baldum",
                "reason": "Baldum chỉ đơn giản là dùng chiêu cuối “Địa giam” để bắt và cô lập Keera, khiến cô ta không thể tiếp tục tấn công hoặc rút lui thoải mái. Hãy dùng kỹ năng này ngay khi Keera cố gắng ám sát đồng đội chủ lực."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "kilgroth",
        "name": "Kil’Groth",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/KilGroth.webp",
        "win_rate": 51.3,
        "pick_rate": 9.3,
        "ban_rate": 7,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "florentino",
                "reason": "Với khả năng gây sát thương chuẩn liên tục, Florentino có thể đè đường Kil’Groth ngay từ đầu. Lưu ý nên lên Đao Truy Hồn để đảm bảo thắng kèo."
            },
            {
                "id": "marja",
                "reason": "Khả năng hồi máu, không thể chọn làm mục tiêu và hút dame khiến Marja trở thành ác mộng đối với Kil’Groth. Bạn chỉ cần giữ khoảng cách vừa đủ, hút sát thương liên tục và bật chiêu cuối né đi khi bị áp sát là Kil’Groth hoàn toàn bất lực."
            },
            {
                "id": "roxie",
                "reason": "Roxie tuy ít người chơi nhưng lại là một kèo trị Kil’Groth khá hiệu quả. Đơn giản là chỉ cần giữ khoảng cách đồng thời cấu rỉa hắn liên tục với vệt lửa của mình. Khi Kil’Groth lao vào định quạt liên tục thì dùng chiêu cuối kéo hắn về phía trụ hoặc đồng đội, làm gián đoạn combo và phối hợp làm thịt Cá."
            },
            {
                "id": "fennik",
                "reason": "Với sải tay dài và chiêu thức lăn lộn, làm chậm các kiểu, Fennik dễ dàng thả diều Kil’Groth. Khi thấy hắn bật chiêu cuối, dùng chiêu 2 để lướt ra xa, đồng thời tung chiêu cuối vào đường di chuyển của hắn để cản trở rồi tiếp tục tấn công."
            },
            {
                "id": "elandorr",
                "reason": "Eland’orr tay đã dài còn có thể bay nhẩy liên tục với các chú bướm của mình, và Cá thì làm sao bắt được Bướm phải không nào. Cách chơi đơn giản là bay vòng vòng và bắn, nếu Kil’Groth áp sát được thì dùng chiêu cuối đẩy hắn ra là xong."
            },
            {
                "id": "hayate",
                "reason": "Sát thương chuẩn mạnh kèm thêm độ cơ động cao, Hayate cực kỳ hiệu quả trong việc thả diều Kil’Groth từ xa. Khi Kil’Groth áp sát, dùng chiêu 2 để lướt đi và tung chiêu cuối để giữ khoảng cách, vừa rỉa máu vừa tạo cơ hội dứt điểm."
            },
            {
                "id": "capheny",
                "reason": "Khả năng vừa bắn vừa di chuyển và sát thương theo phần trăm máu giúp Capheny cực kì khó chịu với Kil’Groth. Khéo léo sử dụng chế độ đại liên để làm chậm và lùi dần giữ khoảng cách khi hắn cố gắng tiếp cận rồi chuyển qua xả đạn tiểu liên nướng Cá."
            },
            {
                "id": "baldum",
                "reason": "Kil’Groth cần được đánh liên tục trong giao tranh kéo dài để tối ưu được tốc độ đánh và điều đó là bất khả thi khi bị Baldum úp hắn xuống mồ với chiêu cuối."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "kriknak",
        "name": "Kriknak",
        "main_role": "Jungle",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Kriknak.webp",
        "win_rate": 50.2,
        "pick_rate": 7.5,
        "ban_rate": 3.6,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "keera",
                "reason": "Keera kích hoạt phân thân với chiêu 2 sẽ né tránh dễ dàng pha nhảy vào từ Kriknak. Khi Kriknak lao vào hụt, Keera lập tức phản công dồn sát thương và tiêu diệt nó nhanh chóng."
            },
            {
                "id": "zill",
                "reason": "Với chiêu cuối “Phong ba”, Zill trở nên không thể bị chọn làm mục tiêu và né toàn bộ sát thương từ Kriknak. Nhanh tay kích hoạt chiêu vào thời điểm Kriknak áp sát, Zill sẽ dễ dàng hóa giải được combo của nó đồng thời phản công lại."
            },
            {
                "id": "omen",
                "reason": "Omen với khả năng khống chế từ chiêu cuối “Sát vực” giúp giữ chân Kriknak không thể thoát khỏi tình huống nguy hiểm. Khi bị Omen trói chặt, Kriknak dễ dàng trở thành mục tiêu của cả đội hình."
            },
            {
                "id": "veera",
                "reason": "Với khả năng khống chế mạnh mẽ từ “Hôn Gió”, Veera sẽ dễ dàng khóa cứng Kriknak khi hắn lao vào, với một con tướng sát thủ máu giấy như Kriknak mà bị choáng lâu thì khả năng cao là phải lên bảng đếm số."
            },
            {
                "id": "raz",
                "reason": "Kriknak bắt buộc phải áp sát mới gây được sát thương nên rất sợ gặp phải một vị tướng pháp sư cận chiến cực khỏe như Raz, vì không có chiêu miễn khống cũng như miễn thương nên Raz dễ dàng tiễn Kriknak về nơi chín suối nếu nó dám lao vào."
            },
            {
                "id": "lauriel",
                "reason": "Nhờ khả năng lặn không thể chọn làm mục tiêu liên tục từ “Đôi cánh thuần khiết”, Kriknak gần như không thể chạm vào người Lauriel. Mà đã lao vào rồi lại ko có chiêu để rút ra thì chỉ có bị Lauriel múa cho đến chết."
            },
            {
                "id": "teemee",
                "reason": "Chiêu cuối “Pháp trận thần kỳ” của TeeMee hồi sinh bản thân hoặc đồng đội nhanh chóng sau khi bị Kriknak hạ gục, chưa kể đến một đống khống chế cực khó chịu khiến Kriknak dồn dame không nổi mà chạy cũng không xong."
            },
            {
                "id": "stuart",
                "reason": "Kriknak là tướng dồn stvl nhanh mà gặp phải chiêu 2 miễn nhiễm sát thương vật lý của Stuart thì chắc chắn là bất lực. Thêm nữa dame của vị tướng này cũng không phải bé nên giết ngược Kriknak cũng không hề khó khăn."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "krixi",
        "name": "Krixi",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Krixi.webp",
        "win_rate": 51.2,
        "pick_rate": 16,
        "ban_rate": 19.2,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "zata",
                "reason": "Với chiêu cuối “Thiên dực”, Zata có thể dễ dàng né tránh kỹ năng cấu rỉa từ Krixi, nhanh chóng áp sát và dồn sát thương để hạ gục cô ta ngay lập tức. Khi cầm Zata hãy lưu ý nếu chưa thấy cơ hội thì hãy giữ khoảng cách để tránh bị Krixi cấu rỉa quá nhiều."
            },
            {
                "id": "lauriel",
                "reason": "Lauriel tận dụng khả năng không bị chọn làm mục tiêu từ chiêu 2 “Đôi cánh thuần khiết” để dễ dàng tránh né chiêu thức khống chế và sát thương của Krixi, khi thời cơ tới kích hoạt chiêu cuối “Phán xét” để dồn dame đưa cô ta lên bảng."
            },
            {
                "id": "bijan",
                "reason": "Bijan có thể chở theo đồng đội hoặc một mình phi xe với tốc độ bàn thờ húc thẳng vào sẽ làm Krixi không thể hất tung và dễ dàng dồn sát thương tiêu diệt cô ta."
            },
            {
                "id": "butterfly",
                "reason": "Butterfly có khả năng dồn sát thương cực mạnh từ chiêu cuối “Ám sát”, dễ dàng tiêu diệt Krixi chỉ trong một combo nếu cô ta mắc sai lầm khi di chuyển hoặc dùng hụt chiêu 2 Bão lá , thậm chí nếu bị cô ta hất tung thì But vẫn có thể giết ngược Krixi bình thường."
            },
            {
                "id": "enzo",
                "reason": "Enzo lên tank hoặc semi có thể thoải mái chịu dame và băng lên hất Krixi về vị trí bất lợi hoặc ném cô ta ra xa khỏi đồng đội để vô hiệu hóa chiêu 3 ."
            },
            {
                "id": "violet",
                "reason": "Chiêu 1 lăn lộn giúp Violet không quá sợ bị dính hất tung từ Krixi. Ngoài ra khả năng sốc sát thương nhanh của Violet cũng rất phù hợp để hạ gục nhanh mà không để Krixi gây dame theo thời gian."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "krizzix",
        "name": "Krizzix",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Krizzix.webp",
        "win_rate": 68.2,
        "pick_rate": 7.7,
        "ban_rate": 5.4,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "baldum",
                "reason": "Baldum có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Krizzix theo dữ liệu meta."
            },
            {
                "id": "thane",
                "reason": "Thane có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Krizzix theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "lauriel",
        "name": "Lauriel",
        "main_role": "Mid",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Lauriel-100x100.webp",
        "win_rate": 51.2,
        "pick_rate": 6.1,
        "ban_rate": 3.3,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "aleister",
                "reason": "Sử dụng chiêu cuối “Ngục tù vĩnh hằng” khóa cứng Lauriel, vô hiệu hóa hoàn toàn khả năng lặn liên tục của cô ta. Lưu ý vị trí trước khi áp chế để có đồng đội cùng dồn sát thương tiêu diệt Lauriel ngay lập tức."
            },
            {
                "id": "dirak",
                "reason": "Dirak với khả năng tạo Lô Cốt sẽ chắn được gần như toàn bộ sát thương của Lauriel trong combat. Chưa kể bộ chiêu thức của vị tướng này đều có thời gian tồn tại khá lâu nên Lauriel rất khó để né."
            },
            {
                "id": "zata",
                "reason": "Chiêu cuối “Thiên dực” của Zata giúp né tránh hoàn toàn sát thương từ Lauriel. Căn thời điểm ngay sau khi Lauriel vừa dùng chiêu 2 Đôi Cánh Thuần Khiết , Zata áp sát nhanh và dồn sát thương để nhanh chóng hạ gục cô ta."
            },
            {
                "id": "raz",
                "reason": "Bộ chiêu thức của Raz sốc sát thương cực nhanh kèm hiệu ứng đẩy lùi sẽ khiến Lauriel không thể dùng chiêu 2 Đôi Cánh Thuần Khiết né đi được. Lưu ý nhịp combo cần liên tục để cô ta không thoát ra khỏi trạng thái bị đẩy lùi."
            },
            {
                "id": "murad",
                "reason": "Murad có thể tiếp cận gây dame và lùi về dễ dàng nhờ bộ chiêu thức của mình. Bởi vì tầm lướt của Lauriel không quá xa nên rất khó thoát khỏi phạm vi tấn công từ Murad chứ đừng nói đến phản công."
            },
            {
                "id": "paine",
                "reason": "Sự khó chịu của Lauriel chủ yếu đến từ khả năng lặn xuống và không thể bị chọn làm mục tiêu, nhưng cô ta không thể thực hiện điều đó khi bị Paine gây câm lặng. Chỉ cần lưu ý dùng chiêu câm lặng chuẩn xác là có thể nhanh chóng đưa Lauriel lên bảng đếm số."
            },
            {
                "id": "enzo",
                "reason": "Enzo khi đi sp và lên tank hoặc semi là đủ độ chống chịu để liên tục bám sát Lauriel, sau đó liên tục móc cô ta về các vị trí bất lợi, vô hiệu hóa hoàn toàn khả năng không thể chọn làm mục tiêu của Lauriel."
            },
            {
                "id": "arum",
                "reason": "Với khả năng áp chế cứng từ chiêu cuối “Thú khốn”, Arum có thể giữ chân Lauriel, khiến cô không thể cù nhây và đồng đội của Arum dễ dàng dồn sát thương kết liễu nhanh chóng."
            },
            {
                "id": "violet",
                "reason": "Violet là một xạ thủ hiếm hoi có khả năng sốc sát thương nhanh, vì vậy vị tướng này có thể gây áp lực lớn lên Lauriel, khiến cô ta không thể dễ dàng cù nhây để hồi phục và gây sát thương liên tục."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "laville",
        "name": "Laville",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Laville-100x100.webp",
        "win_rate": 50.3,
        "pick_rate": 7.9,
        "ban_rate": 4.1,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "nakroth",
                "reason": "Nakroth có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Laville theo dữ liệu meta."
            },
            {
                "id": "kriknak",
                "reason": "Kriknak có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Laville theo dữ liệu meta."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "liliana",
        "name": "Liliana",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Liliana.webp",
        "win_rate": 44.6,
        "pick_rate": 19.6,
        "ban_rate": 4.8,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "yue",
                "reason": "Với sải tay dài, chiêu 3 đẩy ra và lượng sát thương sốc mạnh, Yue rất phù hợp để đi solo 1 vs 1 với Liliana. Khi cầm vị tướng này bạn chỉ cần chú ý cắt cho chuẩn xác và giữ khoảng cách an toàn với Liliana là kèo này chỉ có từ hòa đến thắng."
            },
            {
                "id": "raz",
                "reason": "Như đã nói, Liliana hết sức cơ động nhưng máu giấy, cho nên bạn hãy lựa chọn những vị tướng dồn sát thương nhanh để đối đầu với cô ta và chọn Raz chính là hợp lý nhất. Khi chơi Raz bạn cần giữ khoảng cách an toàn và chờ đợi cơ hội xuất hiện là nhanh chóng lao lên dồn sát thương hạ gục Liliana."
            },
            {
                "id": "paine",
                "reason": "Nếu bạn muốn lựa chọn một con bài sát thủ để khắc chế Liliana thì không một vị tướng nào phù hợp hơn Paine. Khả năng sốc dame, áp sát bất ngờ kèm câm lặng của anh ta sẽ đưa Liliana lên bảng đếm số mà không thể sử dụng chiêu cuối Biến ảnh hoán hình chạy trốn."
            },
            {
                "id": "boltbaron",
                "reason": "Bolt Baron với chiêu cuối có thể bay lên và né choáng từ chiêu 2 Hồ quang đạn của Liliana, ngoài ra với khả năng lướt và tạo giáp ảo liên tục vị tướng này sẽ outplay được những cú lướt áp sát của Liliana và phản công lại cô ta."
            },
            {
                "id": "arum",
                "reason": "Các tướng trợ thủ bình thường sẽ rất khó gây được áp lực cho một tướng cơ động, dame to như Liliana, chỉ có duy nhất Arum với chiêu cuối áp chế cứng là có thể khiến Liliana phải e dè khi di chuyển cao hay áp sát dồn sát thương."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "lindis",
        "name": "Lindis",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Lindis.webp",
        "win_rate": 49.1,
        "pick_rate": 2.9,
        "ban_rate": 4,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "murad",
                "reason": "Murad có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Lindis theo dữ liệu meta."
            },
            {
                "id": "nakroth",
                "reason": "Nakroth có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Lindis theo dữ liệu meta."
            },
            {
                "id": "kriknak",
                "reason": "Kriknak có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Lindis theo dữ liệu meta."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "lorion",
        "name": "Lorion",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Lorion-100x100.webp",
        "win_rate": 55.4,
        "pick_rate": 26,
        "ban_rate": 18.7,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "nakroth",
                "reason": "Nakroth có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Lorion theo dữ liệu meta."
            },
            {
                "id": "omen",
                "reason": "Omen có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Lorion theo dữ liệu meta."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "lubo",
        "name": "Lữ Bố",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Lu-Bo-100x100.webp",
        "win_rate": 50.5,
        "pick_rate": 7.7,
        "ban_rate": 5.7,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "zephys",
                "reason": "Zephys có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Lữ Bố theo dữ liệu meta."
            },
            {
                "id": "maloch",
                "reason": "Maloch có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Lữ Bố theo dữ liệu meta."
            },
            {
                "id": "omen",
                "reason": "Omen có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Lữ Bố theo dữ liệu meta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "lumburr",
        "name": "Lumburr",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Lumburr-100x100.webp",
        "win_rate": 52.8,
        "pick_rate": 10.6,
        "ban_rate": 8.2,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "thane",
                "reason": "Thane có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Lumburr theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "maloch",
        "name": "Maloch",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Maloch-100x100.webp",
        "win_rate": 44.7,
        "pick_rate": 13.3,
        "ban_rate": 4.2,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "florentino",
                "reason": "Florentino luôn là khắc tinh của các loại đấu sĩ chậm chạp và Maloch cũng không ngoại lệ, sát thương chuẩn và khả năng hồi phục từ Flo còn khỏe hơn Maloch gấp mấy lần cho nên chỉ cần lao vào chọc liên tục là win kèo chắc."
            },
            {
                "id": "boltbaron",
                "reason": "Bolt Baron có thể lướt không biết mệt mỏi né tránh một cách mượt mà các cú chém của Maloch, vị tướng này cũng có thể bay lên giúp hóa giải hoàn toàn chiêu cuối từ Maloch và thả diều hắn ta cho tới chết."
            },
            {
                "id": "elandorr",
                "reason": "Eland’orr tay đã dài lại còn có thể bay bướm nhảy múa liên tục, thì việc thả diều Maloch quá là đơn giản. Nói chung nếu gặp phải một Eland’orr biết chơi thì Maloch sẽ cực kỳ ức chế."
            },
            {
                "id": "aoi",
                "reason": "Nối dây thừng vào tường rồi bay như khỉ, Aoi sẽ khiến cho Maloch không biết phải chém vào đâu. Thêm chiêu cuối không thể bị chọn làm mục tiêu kèm giật lùi về phía sau, vị tướng này hóa giải hoàn toàn cú nhảy từ Maloch rồi phản công hạ gục hắn ta."
            },
            {
                "id": "nakroth",
                "reason": "Độ cơ động của Nakroth mà thứ hai thì không ai là chủ nhật, hết bay vào rồi lại bay ra khiến Maloch hoa cả mắt, chỉ có chém vào không khí chứ sao mà trúng nổi Nak. Nói chung là quá khó cho Maloch nếu gặp phải kèo này."
            },
            {
                "id": "tulen",
                "reason": "Các cú lướt nhanh như chớp giật của Tulen có thể vừa giữ khoảng cách an toàn vừa gây sát thương cho Maloch, Tulen đơn giản là bay vòng vòng né chiêu rồi sử dụng Lôi Điểu mổ chết Maloch khi hắn còn ít máu."
            },
            {
                "id": "lauriel",
                "reason": "Thật sự khi nhìn thấy Lauriel là Maloch chán chẳng buồn chơi, rặn mãi mới ra được cú chém thì nó lặn mất, dùng chiêu cuối nhảy từ trên trời xuống nó cũng lại lặn để né mất tiêu thì còn đánh đấm gì nữa. Thôi buông tay ra để Lauriel đưa về bệ đá cổ cho nhanh."
            },
            {
                "id": "thane",
                "reason": "Ở vị trí support, Thane chắc chắn là một sự lựa chọn tốt để khắc chế Maloch vì vị tướng này thừa đủ máu để chịu được những cú chém sát thương chuẩn, kèm thêm bộ combo khống chế cực mạnh hoàn toàn không cho Maloch có cơ hội tiếp cận xạ thủ hoặc tự do quẩy trong giao tranh."
            },
            {
                "id": "gildur",
                "reason": "Gildur là một con tướng trợ thủ có thể nói là full hiệu ứng, liên tục đẩy lùi và làm choáng khi Maloch có ý định áp sát. Nếu thấy hắn dùng chiêu cuối bay vào giữa đội hình thì Gildur chỉ cần đợi sẵn ở vị trí đó rồi cũng gồng chiêu cuối để khống chế là nó phế luôn."
            },
            {
                "id": "hayate",
                "reason": "Bộ chiêu thức của Maloch tuy dame to nhưng lại rất chậm chạp, chính vì vậy một xạ thủ cự cơ động như Hayate sẽ né hết một cách đơn giản kèm theo các cú phóng phi tiêu sát thương chuẩn sẽ nhanh chóng đưa Maloch về thành dưỡng sức."
            },
            {
                "id": "violet",
                "reason": "Violet có thể lăn lộn từ trái qua phải, từ trên xuống dưới thì làm sao một con tướng lù đù, chậm chạp như Maloch có thể chạm vào được. Violet chỉ đơn giản là né tránh rồi tấn công có mục tiêu khác là xong."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "marja",
        "name": "Marja",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Marja-100x100.webp",
        "win_rate": 57.1,
        "pick_rate": 36.8,
        "ban_rate": 39.5,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "ryoma",
                "reason": "Ryoma có thể đợi Marja tiếp cận hoặc chủ động lướt lên combo, dễ dàng cấu đi nửa bình máu của Marja. Sau đó tái kích hoạt chiêu 1 lùi về vị trí an toàn là sẽ khiến cô ta cực kì bất lực."
            },
            {
                "id": "allain",
                "reason": "Mặc dù Marja có chiêu 2 Phệ hồn trùng hút sát thương nhưng Allain với khả năng hồi phục cực mạnh càng đánh càng khỏe, giúp anh có thể giao tranh lâu dài với Marja. Sử dụng chiêu cuối đúng thời điểm để ngắt đi chiêu hút dame từ Marja rồi cứ thế vụt liên tục là sẽ win kèo."
            },
            {
                "id": "murad",
                "reason": "Tầm lướt của Murad xa hơn chiêu 1 Sóng thống khổ của Marja rất nhiều, vì vậy cô ta không thể làm gì nhiều ngoài việc chấp nhận bị Murad cấu rỉa liên tục. Lưu ý để bóng ở vị trí an toàn tránh bị Marja phát hiện ra và đón đầu."
            },
            {
                "id": "yue",
                "reason": "Yue với lượng dame sốc cực nhanh và tầm tay dài sẽ khiến Marja vào thế rất khó chơi, chỉ cần một phát cắt chuẩn là lấy đi hơn nửa bình máu làm cô ta không thể dây dưa được. Chú ý luôn giữ khoảng cách hợp lý, không để Marja áp sát."
            },
            {
                "id": "lauriel",
                "reason": "Lauriel với khả năng hồi phục mạnh mẽ và sát thương liên tục, đặc biệt là có thể lặn xuống để vô hiệu hóa chiêu hút sát thương giúp vị tướng này hoàn toàn trên cơ Marja. Để ý hướng rút lui của Marja để chủ động dí theo hạ gục cô ta."
            },
            {
                "id": "thane",
                "reason": "Thane với khả năng chống chịu và khống chế mạnh mẽ, sẽ chặt đứt kết nối hút sát thương làm Marja không thể thoải mái dây dưa. Bám sát theo và liên tục gây hiệu ứng cản trở cô ta và tạo cơ hội cho đồng đội tiêu diệt."
            },
            {
                "id": "hayate",
                "reason": "Hayate gây sát thương chuẩn mạnh mẽ với tốc độ cao, rất hiệu quả trong việc khắc chế khả năng hồi máu của Marja. Khi bị dính kết nối hút sát thương hãy lướt thoát khỏi tầm rồi quay lại phản đòn hạ gục cô ta"
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "max",
        "name": "Max",
        "main_role": "Top",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Max.webp",
        "win_rate": 47.6,
        "pick_rate": 1.4,
        "ban_rate": 0.7,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "charlotte",
                "reason": "Charlotte có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Max theo dữ liệu meta."
            },
            {
                "id": "superman",
                "reason": "Superman có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Max theo dữ liệu meta."
            },
            {
                "id": "ishar",
                "reason": "Ishar có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Max theo dữ liệu meta."
            },
            {
                "id": "gildur",
                "reason": "Gildur có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Max theo dữ liệu meta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "mganga",
        "name": "Mganga",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Mganga-100x100.webp",
        "win_rate": 44.2,
        "pick_rate": 18.2,
        "ban_rate": 12.4,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "iggy",
                "reason": "Khả năng cấu rỉa cực xa trong khi di chuyển linh hoạt giúp vị tướng này dễ né toàn bộ kỹ năng của Mganga, kèm theo đó là lượng dame khổng lồ, nên chỉ cần dính một combo của Iggy, Mganga gần như không kịp hồi phục mà phải ngậm ngùi lên bảng đếm số."
            },
            {
                "id": "yue",
                "reason": "Tầm đánh của vị tướng này xa hơn hẳn Mganga, lại còn có chiêu cuối đẩy lùi khi Mganga muốn áp sát khiến hắn không bao giờ có cơ hội tích độc. Thêm nữa sự thiếu cơ động của Mganga là điểm yếu chí mạng với hệ sốc dame siêu khỏe như Yue."
            },
            {
                "id": "liliana",
                "reason": "Độ cơ động của Liliana phải thuộc hàng đầu trong số các tướng đi mid nên đây chính là kèo khắc chế cứng Mganga. Liliana chỉ cần cấu rỉa từ xa rồi biến cáo rồi dồn sát thương đúng lúc là Mganga bay màu."
            },
            {
                "id": "butterfly",
                "reason": "Butterfly cực kỳ mạnh về khoản áp sát và dồn dame, vừa hay Mganga lại không có kỹ năng thoát thân, nên chỉ cần không có sự can thiệp của đồng đội thì Mganga gần như chắc chắn hẹo khi bị Butterfly nhảy vào."
            },
            {
                "id": "nakroth",
                "reason": "Nakroth quá cơ động có thể nhấp nhả ra vào liên tục, khiến Mganga gần như bất lực. Nak có thể lao vào từ xa, hạ Mganga cực nhanh rồi thoát ra an toàn."
            },
            {
                "id": "enzo",
                "reason": "Mganga quá thiếu cơ động để có thể né được các cú móc và tay quá ngắn để chạm được vào Enzo, khi đã móc trúng thì Enzo có thể kéo Mganga vào thế khó hoặc trực tiếp hạ sát nó luôn cũng vẫn cứ là dễ dàng."
            },
            {
                "id": "alice",
                "reason": "Alice là khắc tinh lớn của Mganga trong combat. Bộ kỹ năng làm chậm, câm lặng và giảm tốc chạy khiến Mganga không thể di chuyển hoặc tích độc hiệu quả và biến thành phế vật không có tác dụng gì."
            },
            {
                "id": "elsu",
                "reason": "Với tầm bắn xa hàng kilomet, Elsu có thể cấu rỉa Mganga liên tục mà nó không thấy bạn đang ở đâu. Một viên chí mạng là đủ khiến Mganga không dám ló đầu ra thậm chí là đi chầu các cụ luôn."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "mina",
        "name": "Mina",
        "main_role": "SP",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Mina.webp",
        "win_rate": 63,
        "pick_rate": 9.5,
        "ban_rate": 11.8,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "baldum",
                "reason": "Baldum có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Mina theo dữ liệu meta."
            },
            {
                "id": "thane",
                "reason": "Thane có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Mina theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "ming",
        "name": "Ming",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ming-100x100.webp",
        "win_rate": 52.5,
        "pick_rate": 11.2,
        "ban_rate": 5,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "erin",
                "reason": "Erin có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Ming theo dữ liệu meta."
            },
            {
                "id": "lumburr",
                "reason": "Lumburr có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Ming theo dữ liệu meta."
            },
            {
                "id": "kilgroth",
                "reason": "Kil’Groth có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Ming theo dữ liệu meta."
            },
            {
                "id": "ryoma",
                "reason": "Ryoma có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Ming theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "moren",
        "name": "Moren",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2026/01/moren-100x100.webp",
        "win_rate": 45.2,
        "pick_rate": 10.9,
        "ban_rate": 3.5,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "stuart",
                "reason": "Sức mạnh chính của Moren nằm ở thời điểm hắn kích hoạt chiêu 3 Hỏa đạn truy tung và dồn sát thương, chính vì vậy Stuart chỉ cần bật chiêu 2 Huyết ảnh ma nhãn chặn stvl vào đúng lúc đó là ăn chặt. Ngoài ra Stuart có thể căn bắn chiêu 1 Phi đạn tử vong vào bóng của Moren khi hắn ta bay lên trời, chỉ cần nhớ 2 mẹo này thì bạn sẽ win chắc khi gặp Moren ở bất kì giai đoạn nào của trận đấu."
            },
            {
                "id": "elsu",
                "reason": "Moren tuy dame lớn nhưng tầm đánh và độ cơ động vẫn tương đối hạn chế nên Elsu hoàn toàn sẽ gây áp lực được lên hắn ta với các cú Viễn trình kích của mình. Khi cầm Elsu thì tốt nhất là bạn nên tìm cách ép Moren ngay từ đầu trận và chọn trước các vị trí để dùng Viễn trình kích cấu máu hắn từ trước khi các combat nổ ra."
            },
            {
                "id": "toro",
                "reason": "Đặc trưng nội tại Đạn công phá khiến Moren không thể bắn xuyên mục tiêu khi hắn đang ở dưới đất, điều này khiến các tướng tank trở nên cực kì khó chịu đối với Moren. Toro cực kì trâu nên sẽ thoải mái chặn đạn từ Moren thay cho đồng đội, ngoài ra vị tướng này có khả năng bám dính cực khó chịu khiến cho Moren cực khó chơi trong toàn bộ trận đấu."
            },
            {
                "id": "taara",
                "reason": "Cũng như Toro thì Taara cũng vô cùng trâu bò với khả năng hồi máu như vớ được, nói chung khi cầm vị tướng này thì nhiệm vụ của bạn đơn giản là đứng chắn giữa Moren và tướng chủ lực đồng đội để chắn hết làn đạn của hắn."
            },
            {
                "id": "volkath",
                "reason": "Volkath bây giờ có sát thương cực sốc kèm khả năng bám dính vô cùng khó chịu sẽ là cơn ác mộng cho bất kì vị tướng xạ thủ nào và Moren cũng không ngoại lệ. Việc của bạn khi chơi Volkath để khắc chế Moren chỉ đơn giản là bám chặt hắn mỗi khi combat nổ ra, vừa có thể chắn đạn cho đồng minh vừa khiến Moren phải cong đít lên chạy mà không có khoảng trống để xả sát thương."
            },
            {
                "id": "yue",
                "reason": "Những cú cắt xuyên da thấu thịt từ Yue sẽ khiến cây máu mỏng dính của Moren tụt dốc không phanh, thậm chí bốc hơi ngay lập tức nếu trúng ngay tâm. Hãy giữ khoảng cách đủ xa và liên tục thả các phát cắt chuẩn xác vào cái bóng của Moren khi nó đang bay lên bằng chiêu 2 Đằng không thủ pháo hoặc 3 Hỏa đạn truy tung là đủ để cho Moren khó chơi hơn rất nhiều."
            },
            {
                "id": "gildur",
                "reason": "Khi pick Gildur để khắc chế Moren thì cách chơi cũng tương tự như Yue, bạn chỉ cần giữ khoảng cách từ xa và liên tục chưởng Vụ nổ vàng vào mồm Moren. Còn nếu hắn dám bay vào gần bạn thì ngay lập tức gồng Vương quốc vàng là Moren khỏi chơi game luôn."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "murad",
        "name": "Murad",
        "main_role": "Jungle",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Murad.webp",
        "win_rate": 46.3,
        "pick_rate": 14.4,
        "ban_rate": 36.1,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "omen",
                "reason": "Omen cực kỳ hiệu quả trong việc giữ chân Murad nhờ vào chiêu cuối “Sát vực”, khóa chặt Murad không cho hắn biến ảo hay rút lui. Hãy căn thời điểm Murad chém những nhát cuối cùng của Ảo Ảnh Trảm và lập tức sử dụng chiêu cuối để trói hắn ta lại."
            },
            {
                "id": "qi",
                "reason": "Với khả năng gây choáng khá lâu từ chiêu cuối, Qi có thể đẩy Murad đập vào địa hình và khống chế hắn. Chú ý căn chuẩn lúc Murad gần chém xong chiêu 3 để thực hiện combo này."
            },
            {
                "id": "raz",
                "reason": "Tùy từng tình huống mà Raz dùng combo linh hoạt để né tránh sát thương hoặc tiếp cận bóng của Murad nhanh chóng. Ngoài ra Raz cũng có thể căn thời điểm hắn gần chém xong chiêu cuối để đẩy Murad về vị trí bất lợi hoặc tiêu diệt luôn."
            },
            {
                "id": "krixi",
                "reason": "Krixi với chiêu 2 hất tung từ xa khắc chế Murad cực kì hiệu quả. Vừa giữ khoảng cách vừa cấu máu liên tục từ xa với chiêu 1. Khi Murad lao vào, căn thời điểm tốt để hất tung hắn tại chỗ hoặc di chuyển tới vị trí bóng để khống chế khi Murad giật về."
            },
            {
                "id": "gildur",
                "reason": "Gildur sở hữu khả năng khống chế liên tục với chiêu “Vụ nổ vàng” và “Vương quốc vàng” khiến Murad không thể tự do di chuyển. Đặc biệt chiêu 3 choáng rất lâu cực hiệu quả để giữ Murad lại khi hắn lao vào."
            },
            {
                "id": "thane",
                "reason": "Thane cực kỳ hữu dụng trong việc chống lại Murad với khả năng chống chịu và các chiêu thức khống chế mạnh. Canh chuẩn thời điểm Murad gần chém xong chiêu cuối, nhanh chóng hất tung và đẩy hắn về để phối hợp với đồng đội tiêu diệt hắn."
            },
            {
                "id": "mina",
                "reason": "Mina với khả năng kéo mục tiêu từ chiêu “Lưỡi hái tử thần” và chiêu cuối “Ma lực bóng tối” giúp giữ chân Murad cực tốt. Khi Murad cố gắng áp sát cấu máu, căn chuẩn thời cơ rồi sử dụng kỹ năng để kéo và khóa hắn lại, tạo cơ hội cho đồng đội hạ gục."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "nakroth",
        "name": "Nakroth",
        "main_role": "Jungle",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Nakroth-100x100.webp",
        "win_rate": 50,
        "pick_rate": 8.4,
        "ban_rate": 1.6,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "billow",
                "reason": "Billow bám đuổi mục tiêu rất tốt và dồn sát thương cực mạnh, vị tướng này có thể dí theo Nakroth đến chân trời góc biển. Hãy tấn công dồn dập để Nakroth yếu máu giúp Billow tăng thêm tốc độ di chuyển từ nội tại sẽ truy đuổi dễ dàng hơn."
            },
            {
                "id": "zill",
                "reason": "Với khả năng vừa dồn sát thương phép vừa bám đuổi theo mục tiêu từ chiêu cuối , Zill sẽ dễ dàng outplay Nakroth. Hãy căn lượng máu của Nakroth đủ thấp rồi ngay lập tức dùng chiêu cuối để dứt điểm tránh trường hợp không đủ dame để hắn chạy mất."
            },
            {
                "id": "omen",
                "reason": "Omen với khống chế cực mạnh từ chiêu cuối “Sát vực” giúp vị tướng này vô hiệu hóa hoàn toàn khả năng bay nhảy của Nakroth. Lưu ý căn thời điểm Nakroth vừa lướt vào thì hãy kéo rồi nhốt ngay tránh hụt chiêu."
            },
            {
                "id": "tulen",
                "reason": "Tulen di chuyển cực kì linh hoạt kèm chiêu cuối dí theo mục tiêu sẽ khiến Nakroth vô cùng bất lực. Lướt khéo léo để né tránh khi bị áp sát kèm cấu rỉa từ xa và tung chiêu cuối “Lôi điểu” ngay khi Nakroth đang yếu máu để kết liễu hắn ta."
            },
            {
                "id": "veera",
                "reason": "Khống chế cứng từ “Hôn Gió” của Veera sẽ dí theo và làm choáng Nakroth bất kể hắn lướt đi đâu. Khi Nakroth bị choáng, hãy tiếp cận dồn ngay combo để nhanh chóng kết liễu hắn."
            },
            {
                "id": "raz",
                "reason": "Bộ chiêu thức dồn dame nhanh và đẩy lùi đối thủ liên tục sẽ khiến Raz trở thành ác mông của Nakroth. Luôn trong tư thế sẵn sàng khi thấy Nakroth có dấu hiệu muốn bay vào để combo thần tốc đưa hắn lên bảng."
            },
            {
                "id": "enzo",
                "reason": "Khi chơi Enzo bạn hãy lên semi hoặc tank, giữ tư thế sẵn sàng khi thấy Nakroth lướt vào là nhanh chóng móc lại, sau đó tùy tính huống để hất hắn ra xa bảo vệ đồng đội hoặc kéo về để team cùng dồn dame."
            },
            {
                "id": "stuart",
                "reason": "Với khả năng miễn nhiễm sát thương vật lý và lượng dame bùng nổ, Stuart dễ dàng hóa giải các pha áp sát Nakroth và phản công. Lưu ý dùng chiêu 2 cho khéo léo, tránh bị Nakroth câu mất chiêu rồi mới áp sát tấn công."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "natalya",
        "name": "Natalya",
        "main_role": "Mid",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Natalya-100x100.webp",
        "win_rate": 37.5,
        "pick_rate": 5.6,
        "ban_rate": 0.9,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "lauriel",
                "reason": "Lauriel với chiêu thức “Đôi cánh thuần khiết” lặn xuống có thể dễ dàng né tránh các kỹ năng định hướng của Natalya. Khi giao tranh, Lauriel chỉ cần khéo léo vừa né vừa trả dame là sẽ outplay hoàn toàn Natalya."
            },
            {
                "id": "yue",
                "reason": "Natalya phải đứng yên rất nhiều để tung chiêu và điều đó trở thành điểm yếu chí mạng trước mặt Yue. Tận dụng tầm đánh xa cùng sát thương sốc cực mạnh để giữ khoảng cách an toàn và liên tục cắt vào Natalya mỗi khi cô ta đứng một chỗ tung chiêu."
            },
            {
                "id": "krixi",
                "reason": "Krixi dễ dàng gây áp lực lên Natalya nhờ tầm đánh vượt trội hơn. Vừa giữ khoảng cách để né chiêu vừa cấu rỉa, khi thấy đủ dame thì lập tức dùng chiêu cuối để kết liễu cô ta nhanh chóng."
            },
            {
                "id": "murad",
                "reason": "Tầm lướt của Murad quá xa để Natalya có thể đuổi theo vị tướng này, chính vì vậy Natalya chỉ có thể hứng chịu các pha cấu rỉa liên tục mà không thể phản công."
            },
            {
                "id": "yan",
                "reason": "Yan sở hữu sự linh hoạt cao với khả năng lướt liên tục, giúp né tránh kỹ năng định hướng của Natalya đồng thời dồn sát thương mạnh mẽ. Thực sự Natalya sẽ cực kì bất lực khi phải đối đầu với vị tướng này."
            },
            {
                "id": "elandorr",
                "reason": "Khả năng cơ động cao của Eland’orr khiến Natalya rất khó chạm được vào người anh ta. Hãy liên tục giữ khoảng cách, dùng chiêu 2 để chặn kỹ năng đồng thời tấn công liên tục hạ gục Natalya."
            },
            {
                "id": "florentino",
                "reason": "Florentino có khả năng miễn nhiễm khống chế, hồi phục và gây sát thương chuẩn cực mạnh. Khi va chạm với Natalya, Florentino chỉ cần dùng chiêu 3 cho chuẩn xác rồi múa đến khi cô ta gục xuống thì thôi."
            },
            {
                "id": "airi",
                "reason": "Airi có độ cơ động và miễn nhiễm khống chế từ chiêu cuối “Long kiếm”, Airi dễ dàng tiếp cận và dồn một tấn sát thương chuẩn xuyên thủng lớp giáp ảo và đưa Natalya lên bảng đếm số."
            },
            {
                "id": "enzo",
                "reason": "Enzo rất thích những con tướng thiếu cơ động và Natalya cũng không phải là ngoại lệ. Enzo có thể lướt né tránh các chiêu thức định hướng rồi móc Natalya tới các vị trí bất lợi, sau đó nhanh chóng cùng đồng đội kết liễu cô ta."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "ngokhong",
        "name": "Ngộ Không",
        "main_role": "Jungle",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ngo-Khong-100x100.webp",
        "win_rate": 48.8,
        "pick_rate": 2.2,
        "ban_rate": 4.3,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "lindis",
                "reason": "Bộ chiêu của Lindis có thể phát hiện tàng hình kể cả chủ động lẫn đặt bẫy nên khắc chế được Ngộ Không là điều dễ hiểu. Đặt bẫy và kích hoạt chiêu khéo léo để kiểm soát hướng di chuyển của hắn, rồi dồn sát thương nhanh chóng khi phát hiện ra."
            },
            {
                "id": "omen",
                "reason": "Với sức chống chịu cao và khóa mục tiêu từ chiêu cuối “Sát vực”, Omen khiến Ngộ Không hoàn toàn bất lực khi cố tiếp cận chủ lực. Hãy chủ động giữ chiêu cuối để ngay lập tức khóa cứng Ngộ Không khi hắn vừa lao vào."
            },
            {
                "id": "skud",
                "reason": "Skud cực kỳ trâu bò và dame cũng rất to, Ngộ Không gõ không hề thấm nhưng sẽ mất ngay nửa bình nếu dính một đấm từ Skud. Khi chơi vị tướng này chỉ cần lưu ý hướng di chuyển của Ngộ Không để có thể dí theo bắt hắn."
            },
            {
                "id": "max",
                "reason": "Với khả năng phát hiện mục tiêu từ chiêu cuối “Ra đa đạn đạo”, Max dễ dàng vô hiệu hóa khả năng tàng hình và bắt lẻ Ngộ Không từ xa, khiến hắn mất hoàn toàn tính bất ngờ trong suốt khoảng thời gian bị Max phóng đến."
            },
            {
                "id": "ilumia",
                "reason": "Chiêu cuối của Ilumia sẽ làm Ngộ Không lộ nguyên hình trên phạm vi toàn bản đồ khiến khả năng cắn trộm của hắn phế hơn rất nhiều, chưa kể hiệu ứng hất tung và đẩy lùi từ các chiêu khác cũng làm Ngộ Không cực khó tiếp cận dồn dame mục tiêu."
            },
            {
                "id": "krizzix",
                "reason": "Bộ chiêu thức của Krizzix vừa giúp đồng đội tàng hình vừa làm Ngộ Không phải lộ diện, biến khả năng ám sát của hắn thành một trò hề. Luôn giữ chiêu cuối sẵn sàng để làm Ngộ Không lộ nguyên hình để đồng đội có thể dồn dame hắn."
            },
            {
                "id": "enzo",
                "reason": "Với một Enzo lên semi hoặc tank thì Ngộ Không rất khó để hạ gục được vị tướng này trong thời gian ngắn, mà đã không hạ được thì chắc chắn sẽ bị Enzo móc lại và đẩy hắn vào chỗ chết."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "omega",
        "name": "Omega",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Omega-100x100.webp",
        "win_rate": 44.5,
        "pick_rate": 3.5,
        "ban_rate": 1.6,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "baldum",
                "reason": "Baldum có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Omega theo dữ liệu meta."
            },
            {
                "id": "thane",
                "reason": "Thane có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Omega theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "omen",
        "name": "Omen",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Omen.webp",
        "win_rate": 65.5,
        "pick_rate": 10.2,
        "ban_rate": 12.5,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "florentino",
                "reason": "Với một con tướng khá thiếu cơ động như Omen chắc chắn sẽ gặp muôn vàn khó khăn khi đối mặt với Florentino. Chỉ cần thả và nhặt hoa cho chuẩn xác một chút là Flo có thể dễ dàng ăn kèo này."
            },
            {
                "id": "allain",
                "reason": "Khi bạn muốn chọn một tướng dễ chơi mà có thể khắc chế được Omen thì Allain chính là sự lựa chọn số 1. Với khả năng hồi phục liên tục kèm lượng dame càng đánh càng to, Allain chỉ việc lao lên chém thẳng mặt Omen, nếu bị hắn trói thì bạn có thể solo luôn hoặc dùng chiêu cuối nhập vào một mục tiêu gần đó để thoát ra."
            },
            {
                "id": "amily",
                "reason": "Amily có khả năng chống chịu tốt và sát thương cận chiến cực mạnh, giúp cô dễ dàng trên cơ trong các pha trao đổi sát thương với Omen. Khi bị hắn ta kéo vào hoặc trói thì Amily chỉ cần bật chiêu cuối lên đá liên tục là Omen sấp mặt ngay."
            },
            {
                "id": "roxie",
                "reason": "Roxie thừa đủ độ cứng cáp và khả năng cấu rỉa liên tục để đè đường Omen. Ngoài ra chiêu cuối “Keo lửa” còn có thể áp chế ko cho Omen tấn công khi hắn đang trói chân đồng đội của bạn."
            },
            {
                "id": "natalya",
                "reason": "Natalya là một pháp sư có khả năng gây dame cận chiến cực mạnh nên kể cả có bị Omen khóa cũng có thể sốc chết hắn ta tại chỗ. Nhất là chiêu 2 của vị tướng này làm đơ khiến Omen không thể tấn công nổi khi hắn đang khóa và cố gắng dồn dame mục tiêu."
            },
            {
                "id": "lauriel",
                "reason": "Lauriel với khả năng hồi phục và sát thương liên tục từ chiêu “Phán xét”, cô dễ dàng áp đảo Omen trong giao tranh kéo dài. Duy trì sát thương và né tránh kéo của Omen, tận dụng thời điểm hắn hụt chiêu để kết liễu."
            },
            {
                "id": "arum",
                "reason": "Nếu bạn chơi hỗ trợ và team địch quên không cấm Arum, hãy nhanh chóng pick ngay để khắc chế Ryoma bằng chiêu 3 áp chế cứng của mình."
            },
            {
                "id": "zip",
                "reason": "Zip sử dụng khả năng để hút đồng đội ra khỏi Sát vực của Omen, giúp đội hình an toàn trước những pha khóa cứng nguy hiểm. Zip cũng có thể dùng các kỹ năng khác để khống chế và làm chậm, khiến Omen đã tù càng tù hơn."
            },
            {
                "id": "mina",
                "reason": "Với khả năng khiêu khích từ chiêu cuối, Mina sẽ hoàn toàn ngăn cản được Omen tấn công chủ lực. Chủ động giữ chiêu 3 để ép hắn phải tấn công bạn thay vì chủ lực khi đang dùng Sát vực"
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "ormarr",
        "name": "Ormarr",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ormarr-100x100.webp",
        "win_rate": 49.1,
        "pick_rate": 10.6,
        "ban_rate": 6.4,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "edras",
                "reason": "Edras có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Ormarr theo dữ liệu meta."
            },
            {
                "id": "toro",
                "reason": "Toro có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Ormarr theo dữ liệu meta."
            },
            {
                "id": "sephera",
                "reason": "Sephera có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Ormarr theo dữ liệu meta."
            },
            {
                "id": "tachi",
                "reason": "Tachi có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Ormarr theo dữ liệu meta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "paine",
        "name": "Paine",
        "main_role": "Jungle",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Paine-100x100.webp",
        "win_rate": 52.7,
        "pick_rate": 17.5,
        "ban_rate": 15.1,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "zuka",
                "reason": "Zuka khá cứng cáp nên không quá sợ hãi khi dính phải một combo từ Paine, ngoài ra với độ cơ động cao của mình, vị tướng này hoàn toàn có thể truy đuổi theo bóng Hồn gọi xác và bắt chết Paine."
            },
            {
                "id": "omen",
                "reason": "Omen có chiêu cuối “Sát vực” dễ dàng trói giữ Paine lại, phế đi độ cơ động của hắn và tạo điều kiện cho đồng đội dồn sát thương kết liễu nhanh chóng."
            },
            {
                "id": "allain",
                "reason": "Khả năng hồi phục và sát thương chuẩn mạnh từ Allain giúp anh dễ dàng trên cơ hoàn toàn khi giao tranh với Paine. Sử dụng chiêu cuối đúng lúc hắn sắp biến đi để nhập vào rồi thoát ra giết khi Paine đã hết chiêu để chạy"
            },
            {
                "id": "skud",
                "reason": "Skud rất trâu bò nên các combo dồn dame của Paine chỉ như muỗi đốt inox. Hãy căn để làm sao đấm được chiêu 1 vào người là vị tướng này sẽ có thể lấy đi một nửa lượng máu, thậm chí hạ gục Paine luôn."
            },
            {
                "id": "veera",
                "reason": "Paine rất là sợ dính khống chế và chiêu 2 của Veera có khả năng gây choáng cực lâu rất khó chịu. Chỉ cần Veera tung được chiêu thì Paine dù biến đi đâu cũng sẽ bị choáng mà đã choáng là khả năng lên bảng rất cao."
            },
            {
                "id": "natalya",
                "reason": "Natalya sốc sát thương phép rất mạnh và chiêu 2 gây khống chế cực khó chịu, nhất là khi mục tiêu ở gần nên Paine rất ngại phải tiếp cận và giao tranh với vị tướng này."
            },
            {
                "id": "gildur",
                "reason": "Gildur là một con tướng support khá dễ chơi và rất hiệu quả trong việc khắc chế Paine. Gildur có thể dễ dàng bảo kê đồng đội khỏi các tình huống Paine lao vào bằng các đòn choáng từ xa bằng chiêu 1 và tầm gần bằng chiêu cuối."
            },
            {
                "id": "baldum",
                "reason": "Baldum có thể hất ngược Paine về không cho hắn dồn sát thương các vị trí quan trọng của team, hoặc sử dụng khống chế mạnh từ “Địa giam” nhằm cô lập và tạo cơ hội cho đồng đội phối hợp tiêu diệt Paine."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "preyta",
        "name": "Preyta",
        "main_role": "Mid",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Preyta.webp",
        "win_rate": 47.7,
        "pick_rate": 3.6,
        "ban_rate": 1.9,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "nakroth",
                "reason": "Nakroth có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Preyta theo dữ liệu meta."
            },
            {
                "id": "kriknak",
                "reason": "Kriknak có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Preyta theo dữ liệu meta."
            },
            {
                "id": "murad",
                "reason": "Murad có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Preyta theo dữ liệu meta."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "qi",
        "name": "Qi",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Qi-100x100.webp",
        "win_rate": 37.5,
        "pick_rate": 28.1,
        "ban_rate": 19.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "skud",
                "reason": "Skud tuy không có giải khống chế nhưng bù lại rất trâu bò nên khá là dễ đánh khi gặp Qi, thêm nữa là chống chịu và độ cơ động của cô ta cũng không quá vượt trội vì vậy việc ăn vài cú đấm trời giáng từ Skud là hoàn toàn có thể xảy ra."
            },
            {
                "id": "allain",
                "reason": "Khả năng hồi phục và sát thương càng đánh càng mạnh giúp Allain không ngại khi đối đầu trực diện với Qi, chỉ cần chú ý đánh cẩn thận trong giai đoạn trước level 4 và lên theo lối semi là chắc chắn vị tướng này sẽ ăn chặt Qi ."
            },
            {
                "id": "kilgroth",
                "reason": "Kil’groth có chiêu cuối giải và miễn nhiễm khống chế nên hoàn toàn có thể áp đảo Qi khi cô ta không thể giữ chân hoặc làm choáng được vị tướng này, nhưng cũng cần lưu ý nên giao tranh khi đã có một vài trang bị cũng như tích đủ stacks nội tại."
            },
            {
                "id": "rourke",
                "reason": "Chiêu cuối giải, miễn mọi khống chế của Rourke là ác mộng với một con tướng dựa nhiều vào làm choáng như Qi. Khi cầm vị tướng này bạn đơn giản chỉ cần áp sát bắn liên tục, kích hoạt chiêu 3 hợp lý là ăn chặt cô ta."
            },
            {
                "id": "chaugnar",
                "reason": "Với khả năng giải khống chế cho cả đội bằng chiêu cuối “Vực hỗn loạn”, Chaugnar giúp toàn đội dễ dàng vô hiệu hóa các hiệu ứng khống chế từ Qi, làm giảm rất nhiều sức mạnh của cô ta trong giao tranh."
            },
            {
                "id": "ybneth",
                "reason": "Y’bneth có khả năng khống chế diện rộng mạnh mẽ và liên tục nên cực hiệu quả trong việc cản trở Qi tiếp cận làm choáng và gây sát thương lên đội hình."
            },
            {
                "id": "hayate",
                "reason": "Hayate rất cơ động và khả năng gây sát thương chuẩn từ xa rất hiệu quả để cấu máu Qi trước khi cô ta kịp áp sát. Chủ động giữ khoảng cách an toàn và chơi theo phong cách thả diều, chỉ cần không bị đẩy vào tường là Qi gần như không thể gây áp lực lên vị tướng này."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "quillen",
        "name": "Quillen",
        "main_role": "Jungle",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2026/01/Quillen.webp",
        "win_rate": 49.6,
        "pick_rate": 6.9,
        "ban_rate": 9.9,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "enzo",
                "reason": "Enzo là cơn ác mộng đối với các sát thủ cận chiến. Khi Quillen hiện hình và lao vào áp sát, hắn vô tình tự đưa mình vào tầm hoạt động cực gần của Enzo. Chỉ cần một cú móc chuẩn xác, Enzo lập tức hất văng Quillen ra xa khỏi đội hình, khống chế cứng và biến hắn thành bia đỡ đạn."
            },
            {
                "id": "fennik",
                "reason": "Là một xạ thủ đi rừng, Fennik khắc chế Quillen nhờ nội tại phát hiện tàng hình và chiêu 2 không thể bị chọn làm mục tiêu, giúp tạo khoảng trống với Quillen. Đồng thời, chiêu cuối ném lốc của Fennik có thể ép góc, chặn đường di chuyển của Quillen, sau đó bồi thêm chiêu 1 để đánh dấu và sốc dame lật kèo."
            },
            {
                "id": "omen",
                "reason": "Mặc dù Quillen sẽ không chọn tấn công một vị tướng cứng cáp như Omen, nhưng vị tướng này hoàn toàn có thể đi cạnh các vị trí chủ lực và rình kéo xong trói Quillen lại ngay khi hắn hiện hình là nó phế luôn."
            },
            {
                "id": "aleister",
                "reason": "Aleister thì luôn là khắc chế cứng của tất cả các thể loại sát thủ máu giấy và Quillen tất nhiên cũng không phải ngoại lệ. Quillen chỉ vừa hiện ra là ăn ngay một cái áp chế cứng vào mồm là nghỉ chơi."
            },
            {
                "id": "lauriel",
                "reason": "Khả năng sốc sát thương của Quillen phụ thuộc vào việc dồn combo chớp nhoáng. Tuy nhiên, Lauriel với chiêu 2 có thể dễ dàng né tránh toàn bộ sát thương từ bộ chiêu thức của Quillen. Khi hắn đã hết chiêu, Lauriel chỉ việc bật chiêu cuối múa trong vòng kết giới, làm chậm và rút cạn máu gã sát thủ này."
            },
            {
                "id": "arum",
                "reason": "Arum cũng giống như Aleister, luôn là cơm ác mộng đối với các thể loại tướng cận chiến máu giấy như Quillen. Chỉ cần có sự bảo kê của cô nàng hệ thú này thì Quillen không thể nào ám sát các vị trí quan trọng của đối phương."
            },
            {
                "id": "thane",
                "reason": "Sự trâu bò và bộ kỹ năng bảo kê tận răng của Thane khiến Quillen rất khó tiếp cận chủ lực. Khi ngửi thấy mùi Quillen tàng hình gần đó, Thane chỉ cần canh me Xạ thủ của mình. Ngay khi Quillen vạch áo hiện hình, chiêu 1 của Thane sẽ đẩy lùi hắn ra xa vạn dặm, tiếp nối bằng chiêu 2 làm choáng để đồng đội dồn sát thương."
            },
            {
                "id": "gildur",
                "reason": "Khi cầm Gildur việc khắc chế Quillen cực kì đơn giản, chỉ cần thấy nháy nháy màn hình là để tay sẵn vào chiêu cuối sẵn sàng bấm khi Quillen hiện hình. Máu giấy như Quillen mà ăn choáng vài giây thì chết là điều không thể tránh."
            },
            {
                "id": "stuart",
                "reason": "Khắc tinh lớn nhất của sát thủ vật lý chính là Stuart. Chỉ với một pha bật chiêu 2, Stuart lập tức được miễn nhiễm hoàn toàn 100% sát thương vật lý từ Quillen. Khi Quillen mất combo mà không hạ được mục tiêu, Stuart sẽ phản công bằng vài cú bắn tiễn Quillen lên bảng."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "raz",
        "name": "Raz",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Raz.webp",
        "win_rate": 42.9,
        "pick_rate": 2.5,
        "ban_rate": 0,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "lauriel",
                "reason": "Lauriel cực kỳ linh hoạt nên sẽ dễ dàng né đi những pha combo áp sát của Raz. Hãy chủ động giữ khoảng cách để kịp thời dùng chiêu 2 tránh đòn, đồng thời phản công dồn dame hắn."
            },
            {
                "id": "zata",
                "reason": "Với khả năng bay lượn né tránh kỹ năng cực tốt từ chiêu cuối “Thiên dực”, Zata dễ dàng tránh được các pha tấn công từ Raz. Chờ thời điểm Raz tung combo, ngay lập tức bay lên né tránh đồng thời dồn sát thương hạ gục hắn."
            },
            {
                "id": "ignis",
                "reason": "Ignis có tầm tay dài vượt trội, dame khá kèm nhiều hiệu ứng sẽ dễ dàng ngăn Raz tiếp cận và thả diều hắn. Giữ khoảng cách hợp lý để Raz không thể lao vào dồn sát thương, đồng thời gây áp lực cấu rỉa liên tục."
            },
            {
                "id": "omen",
                "reason": "Omen sử dụng “Sát vực” để khóa chặt Raz tại chỗ, phế bỏ hoàn toàn độ cơ động của hắn. Khi đã giữ được Raz, lập tức dồn sát thương liên tục, không cho hắn có cơ hội đào thoát."
            },
            {
                "id": "grakk",
                "reason": "Khi có Grakk bảo kê thì Raz rất khó có thể săn được tướng chủ lực. Grakk dùng chiêu “Xích ma quái” để kéo Raz vào đội hình đồng minh và khóa chặt hắn bằng chiêu cuối “Nuốt chửng”. Khi Raz bị giữ chân, đồng đội dễ dàng tiêu diệt nhanh chóng."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "richter",
        "name": "Richter",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Richter-100x100.webp",
        "win_rate": 69.6,
        "pick_rate": 8.1,
        "ban_rate": 2.2,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "maloch",
                "reason": "Maloch có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Richter theo dữ liệu meta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "rouie",
        "name": "Rouie",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Rouie-100x100.webp",
        "win_rate": 48.4,
        "pick_rate": 22.5,
        "ban_rate": 65.8,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "thane",
                "reason": "Thane có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Rouie theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "rourke",
        "name": "Rourke",
        "main_role": "Jungle",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Rourke.webp",
        "win_rate": 48.5,
        "pick_rate": 7.4,
        "ban_rate": 2.1,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "zephys",
                "reason": "Zephys có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Rourke theo dữ liệu meta."
            },
            {
                "id": "maloch",
                "reason": "Maloch có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Rourke theo dữ liệu meta."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "roxie",
        "name": "Roxie",
        "main_role": "Top",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Roxie-100x100.webp",
        "win_rate": 66.7,
        "pick_rate": 2.1,
        "ban_rate": 0.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "omen",
                "reason": "Omen có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Roxie theo dữ liệu meta."
            },
            {
                "id": "baldum",
                "reason": "Baldum có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Roxie theo dữ liệu meta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "ryoma",
        "name": "Ryoma",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ryoma.webp",
        "win_rate": 46.7,
        "pick_rate": 15.8,
        "ban_rate": 4.1,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "omen",
                "reason": "Với độ chống chịu cao của Omen, Ryoma khó lòng mà hạ gục được vị tướng này trong một vài combo, ngược lại Ryoma hoàn toàn có thể bị Omen khều lại và trói với chiêu cuối rồi quật cho đến chết."
            },
            {
                "id": "skud",
                "reason": "Skud là một kèo đơn giản dễ chơi và khắc chế Ryoma cực tốt, bạn chỉ cần canh đấm thẳng chiêu 1 vào mặt mỗi khi Ryoma tiến lên farm lính, Một đấm của Skud có thể lấy nửa bình máu của Ryoma nhưng khi hắn phản công thì chỉ như gãi ngứa cho Skud."
            },
            {
                "id": "charlotte",
                "reason": "Khả năng chống chịu và hồi phục của Charlotte rất tốt không hề sợ bị Ryoma cấu rỉa, cộng thêm chuỗi chiêu thức cực dài dễ dàng dí theo và tấn công Ryoma liên tục nên sẽ dễ dàng áp đảo được hắn ta."
            },
            {
                "id": "volkath",
                "reason": "Nếu bạn cầm Volkath hãy thoải mái di chuyển cao vì nếu Ryoma tiếp cận dồn sát thương cũng khó mà hạ gục được bạn, mà bạn lại có thể tân dụng cự ly gần để tung chiêu 2 khắc dấu ấn và khi hắn rút lui thì tái kích hoạt bay vào chém liên tiếp, có thể bật ultil băng trụ luôn."
            },
            {
                "id": "zuka",
                "reason": "So sánh về độ cơ động, sát thương hay hồi phục, Zuka vẫn hơn ryoma khá nhiều, thêm nữa chuỗi chiêu thức của Gấu Trúc cực kỳ dài chứ không ngắn như Ryoma nên rất dễ dàng trong việc truy đuổi và hạ sát hắn ta."
            },
            {
                "id": "aleister",
                "reason": "Như đã phân tích ở phần ưu nhược điểm, Ryoma không có chiêu thức miễn khống nên khi gặp phải vua khống chế như Aleister là Ryoma rất khó đánh, lao vào thì chết mà không lao vào thì làm gì bây giờ?"
            },
            {
                "id": "natalya",
                "reason": "Chiêu cuối của Natalya có miễn khống kèm tạo lượng lớn giáp ảo nên Ryoma khó mà hạ gục được cô ta, ngoài ra khi Ryoma lướt vào thì Nata chỉ cần nhanh chóng thả chiêu 2 làm chậm, nếu hắn không nhanh tay lộn ra kịp là nằm lại luôn."
            },
            {
                "id": "arum",
                "reason": "Nếu bạn chơi hỗ trợ và team địch quên không cấm Arum, hãy nhanh chóng pick ngay để khắc chế Ryoma bằng chiêu 3 áp chế cứng của mình."
            },
            {
                "id": "stuart",
                "reason": "Mặc dù Stuart là xạ thủ nhưng lại có thể làm cho một đấu sĩ kiêm sát thủ như Ryoma sợ hãi. với chiêu 3 đẩy ra kèm chiêu 2 miễn nhiễm sát thương vật lý, Ryoma không thế nào gây áp lực cho Stuart mà nhiều khi còn bị hạ gục ngược."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "sephera",
        "name": "Sephera",
        "main_role": "Mid",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Sephera-100x100.webp",
        "win_rate": 49,
        "pick_rate": 2.3,
        "ban_rate": 1.2,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "omen",
                "reason": "Omen có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Sephera theo dữ liệu meta."
            },
            {
                "id": "lubo",
                "reason": "Lữ Bố có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Sephera theo dữ liệu meta."
            },
            {
                "id": "rouie",
                "reason": "Rouie có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Sephera theo dữ liệu meta."
            },
            {
                "id": "ming",
                "reason": "Ming có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Sephera theo dữ liệu meta."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "sinestrea",
        "name": "Sinestrea",
        "main_role": "Jungle",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Sinestrea-100x100.webp",
        "win_rate": 56.6,
        "pick_rate": 18.6,
        "ban_rate": 74.5,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "murad",
                "reason": "Sinestrea không hề có cửa solo với Murad ở bất kì giai đoạn nào của trận đấu vì cô ta không có cơ sở gì để chạm được vào người một con tướng quá khó chịu như Murad, muốn chạy không được mà đánh cũng không xong."
            },
            {
                "id": "billow",
                "reason": "Hiện tại trong số các sát thủ đi rừng thì Billow có thể xếp vào top mạnh nhất, hơn nữa Sinestrea không mạnh ở khả năng sốc dame và máu lại khá giấy nên gần như không có cửa ăn Billow nếu đồ không chênh lệch quá nhiều."
            },
            {
                "id": "ryoma",
                "reason": "Combo của Ryoma sốc sát thương với tốc độ cao kèm theo chiêu khống chế cứng sẽ khiến cho một con tướng máu giấy như Sinestrea gặp cực nhiều khó khăn. Với tầm chiêu không quá vượt trội và khả năng dồn dame kém thì Sinestrea chắc chắn nằm cửa dưới trong kèo này."
            },
            {
                "id": "tulen",
                "reason": "Chính vì Sinestrea chủ yếu gây sát thương đều đều bằng đòn đánh tay, đồng thời khống chế từ chiêu 1 Huyết đột/Huyết tiễn không thực mạnh nên rất tù túng trước độ cơ động của Tulen. Ngược lại thì Tulen hoàn toàn có thể trêu đùa và làm thịt Sinestrea khá đơn giản."
            },
            {
                "id": "raz",
                "reason": "Tốc độ dồn sát thương và khống chế của Raz thậm chí còn khủng khiếp hơn các vị tướng kể trên, cho nên việc vị tướng này khắc chế hoàn toàn Sinestrea là điều hoàn toàn dễ hiểu. Với một combo chuẩn là Raz sẽ đưa Sinestrea về với các cụ là hoàn toàn có thể."
            },
            {
                "id": "mina",
                "reason": "Con tướng nào càng phụ thuộc vào các đòn đánh thường nhiều thì càng sợ Mina vì bộ chiêu của Mina sẽ được cường hóa rất nhiều khi bị dính đánh tay, thêm nữa Sinestrea không quá cơ động nên rất dễ bị dính chiêu cuối của Mina và trở thành bao cát cho đối phương dã liên tục."
            },
            {
                "id": "stuart",
                "reason": "Stuart là một tướng AD đặc biệt với khả năng miễn nhiễm sát thương vật lý nên Sinestrea chẳng thể gây áp lực nổi, ngoài ra vị tướng này có tầm tay vượt trội kèm dame khá to, vì vậy việc xạ thủ giết ngược sát thủ là không khó."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "skud",
        "name": "Skud",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Skud-100x100.webp",
        "win_rate": 52,
        "pick_rate": 17.5,
        "ban_rate": 12.4,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "florentino",
                "reason": "Kiếm pháp gây sát thương chuẩn kèm hồi phục liên tục cho phép Florentino rất thoải mái khi đối đầu với Skud, chưa kể Skud không đủ độ cơ động khiến cho các pha ném hoa từ Flo sẽ dễ dàng trúng mục tiêu hơn nhiều."
            },
            {
                "id": "allain",
                "reason": "Nói về khả năng solo khô máu thì Allain cũng phải thuộc hàng top các tướng mạnh nhất. Bộ chiêu thức gây sát thương kèm hồi phục mạnh mẽ theo thời gian sẽ giúp cho vị tướng này lấn át hoàn toàn Skud."
            },
            {
                "id": "kilgroth",
                "reason": "Cá chà bặc cũng là một kèo đặc trị Skud trên đường Tà Thần khá hiệu quả, vị tướng này vừa có thể gây ra lượng dame ổn định trong thời gian dài và nhận hồi máu ổn định từ chiêu kèm trang bị nên hoàn toàn có thể khiến cuộc sống của Skud gặp rất nhiều khó khăn."
            },
            {
                "id": "hayate",
                "reason": "Skud tuy là tướng đỡ đòn nhưng dame của nó cũng không phải dạng vừa đâu, vì vậy khi chọn xạ thủ có thể đối đầu với hắn thì phải có đủ hai yếu tố là độ cơ động cao giúp thả diều, và sát thương chuẩn để đục xuyên qua lớp da giày thịt béo, chính vì thế Hayate là lựa chọn hoàn hảo nhất."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "slimz",
        "name": "Slimz",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Slimz.webp",
        "win_rate": 71.4,
        "pick_rate": 2.5,
        "ban_rate": 0,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "nakroth",
                "reason": "Nakroth có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Slimz theo dữ liệu meta."
            },
            {
                "id": "kriknak",
                "reason": "Kriknak có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Slimz theo dữ liệu meta."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "stuart",
        "name": "Stuart",
        "main_role": "AD",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Stuart-100x100.webp",
        "win_rate": 50,
        "pick_rate": 27.4,
        "ban_rate": 10.7,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "elsu",
                "reason": "Stuart với khả năng miễn stvl từ chiêu 2 Huyết ảnh ma nhãn nên hầu như là trên kèo mọi ad khác, chỉ có duy nhất Elsu với tầm tay dài như cái bơm sẽ có thể trị được hắn ta ở vị trí xạ thủ."
            },
            {
                "id": "tachi",
                "reason": "Một vị tướng ít người chơi nhưng khắc chế Stuart cực kì hiệu quả chính là Tachi. Bộ combo áp sát gây sát thương chuẩn cực mạnh kèm hồi phục và tạo giáp liên tục của vị tướng này sẽ đè bẹp Stuart. Bạn có thể cầm Tachi đi hỗ trợ hay đi top và lên semi để đạt hiệu quả cao nhất nhé."
            },
            {
                "id": "enzo",
                "reason": "Tuy rằng Enzo không gây dame phép nhưng điểm mạnh nhất của vị tướng này không nằm ở sát thương mà là ở khả năng truy đuổi rồi khống chế siêu khó chịu. Chỉ cần bạn lên vài món đồ giáp rồi liên tục bám sát quấy rối và hất Stuart về là hắn khỏi chơi game."
            },
            {
                "id": "toro",
                "reason": "Khả năng bám đuổi mục tiêu của Toro là rất tốt, kèm theo nhiều khống chế và siêu trâu bò khiến vị tướng này trở thành sự chọn lựa hoàn hảo ở vị trí support nhằm đặc trị Stuart. Lưu ý dí theo Stuart nhưng cần để ý vị trí của đồng đội và bảo vệ xạ thủ team mình."
            },
            {
                "id": "maloch",
                "reason": "Thêm một con tướng có thể đi cả top lẫn vị trí hỗ trợ mà khắc chế tốt Stuart chính là Maloch vì khả năng dí theo kèm gây sát thương chuẩn mạnh. Nếu cầm Maloch đi support, hãy lên nhiều đồ tank kèm theo 1 Nanh Fenrir để tăng lượng sát thương chuẩn gây ra."
            },
            {
                "id": "zill",
                "reason": "Zill là một ứng cử viên số một cho vị trí sát thủ đi rừng khắc chế Stuart, lí do là vị tướng này rất không yêu cầu kĩ năng cao nhưng lượng sát thương phép gây ra là cực kì nhiều."
            },
            {
                "id": "paine",
                "reason": "Paine có thể sử dụng chiêu dịch chuyển để tiếp cận Stuart bất ngờ. Sát thương phép sốc nhanh và chiêu gây câm lặng giúp Paine dễ dàng hạ gục Stuart trong thời gian ngắn."
            },
            {
                "id": "zata",
                "reason": "Zata với chiêu cuối lướt liên tục giúp tiếp cận Stuart một cách bất ngờ. Khi đã bị vị tướng này nhắm đến, Stuart sẽ rất khó có thể chống đỡ sát thương phép bùng nổ của Zata."
            },
            {
                "id": "yue",
                "reason": "Yue có tầm tay dài và đặc biệt lượng dame phép sốc cực mạnh, có thể đưa Stuart lên bảng đếm số với một nhát cắt. Có một mẹo nhỏ nếu bạn nhanh tay là có thể cắt vào vị trí mà Stuart sẽ quay trở về sau khi lướt tới địch bằng chiêu cuối Hủy diệt bộc phá ."
            },
            {
                "id": "marja",
                "reason": "Marja có lượng sát thương phép không lớn nhưng thừa đủ để săn một con xạ thủ như Stuart, đặc biệt hơn là khả năng bám đuôi cù nhây cực kì khó chịu khiến hắn ta khó mà được chơi game."
            },
            {
                "id": "boltbaron",
                "reason": "Baron có lượng dame phép ổn, tạo giáp liên tục, khả năng truy đuổi tốt, đầy đủ các yếu tố để khiến cuộc sống của Stuart khó khăn hơn rất nhiều. Nếu team bạn có đủ lượng stvl thì thậm chí có thể mang Bolt Baron xuống đi đường rồng để đặc trị Stuart."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "superman",
        "name": "Superman",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Superman.webp",
        "win_rate": 49,
        "pick_rate": 2,
        "ban_rate": 3.4,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "hayate",
                "reason": "Hayate có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Superman theo dữ liệu meta."
            },
            {
                "id": "telannas",
                "reason": "Tel'Annas có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Superman theo dữ liệu meta."
            },
            {
                "id": "stuart",
                "reason": "Stuart có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Superman theo dữ liệu meta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "taara",
        "name": "Taara",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Taara-100x100.webp",
        "win_rate": 59.7,
        "pick_rate": 21.8,
        "ban_rate": 1.9,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "florentino",
                "reason": "Tarra cực kém linh hoạt nên nhìn thấy Florentino như nhìn thấy bố. Lợi thế trâu bò của con tướng này gần như không có nghĩa lý gì khi phải đối mặt với lượng sát thương chuẩn cực mạnh theo thời gian dài, Flo chỉ cần đơn giản là múa mượt một chút chắc chắn sẽ ăn chặt kèo này."
            },
            {
                "id": "maloch",
                "reason": "Một vị tướng dồi dào sát thương chuẩn khác có thể khiến Taara cực kì khó thở đó chính là Maloch. Những cú quạt gây cả tấn dame có thể khiến Taara cực kỳ phải cẩn trọng trong các pha để máu tụt xuống thấp nếu không muốn bị đột tử."
            },
            {
                "id": "allain",
                "reason": "Allain vốn nổi tiếng là một con tướng càng đánh lâu thì càng khỏe, nên sẽ cực kỳ thích hợp để chọn khi muốn đè đường Taara. Nếu bạn thích sự đơn giản thì Allain chính là sự lựa chọn số 1 bởi vì cách chơi chỉ đơn giản là lao vào mà chém liên tục cho đến khi khô máu thì thôi."
            },
            {
                "id": "mganga",
                "reason": "Mganga ngoài nhược điểm duy nhất là không hợp meta, mọi thứ còn lại đều khiến vị tướng này trở thành khắc chế cứng của Taara. Bộ skill của Mganga sẽ tận dụng được sự thiếu cơ động để cộng dồn độc kèm theo hiệu ứng làm giảm hồi máu sẽ khiến Taara giảm mạnh khả năng tank."
            },
            {
                "id": "lauriel",
                "reason": "Lauriel cực kì thích khi combat mà đội hình địch có Taara, lý do là vì con tướng này quá tù nên sẽ làm cái bia di động cho Lauriel có thể lướt chiêu 2 liên tục, cũng chính vì di chuyển chậm như rùa nên Tarra gần như không thể chạm vào cánh chim không mỏi Lauriel."
            },
            {
                "id": "hayate",
                "reason": "Hayate là nỗi ám ảnh của mọi tướng trâu bò. Với sát thương chuẩn theo % máu, Hayate chỉ cần giữ vị trí tốt, thả diều liên tục là Taara mất máu rất nhanh, bật chiêu cuối cũng không chịu nổi bao lâu chứ đừng nói là đứng ra hứng phi tiêu."
            },
            {
                "id": "gildur",
                "reason": "Gildur không cần giết Taara, nhiệm vụ chính là làm choáng liên tục. Chỉ cần khóa Taara đúng thời điểm trước khi nó bật chiêu cuối nhằm để team dồn chết luôn hoặc khi nó lao vào đội hình, giá trị của Taara trong combat sẽ giảm đi thấy rõ."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "tachi",
        "name": "Tachi",
        "main_role": "Top",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Tachi-100x100.webp",
        "win_rate": 48.9,
        "pick_rate": 30.9,
        "ban_rate": 29.2,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "florentino",
                "reason": "Toàn bộ ưu điểm của Tachi đều bị Florentino khắc chế cứng, khả năng hồi phục kèm sát thương chuẩn liên tục của vị tướng này sẽ khiến cuộc sống của Tachi trở thành địa ngục trần gian."
            },
            {
                "id": "marja",
                "reason": "Tốc độ xuất chiêu và dồn sát thương của Tachi quá chậm để có thể làm gì được được sự ảo ma của con Marja, khi gặp phải kèo này Tachi gần như chỉ có thể ôm trụ để farm lính mà thôi."
            },
            {
                "id": "aleister",
                "reason": "Tachi là tướng tay ngắn, độ cơ động thấp, tốc độ tung chiêu đã chậm sẵn còn gặp phải con Aleister khống chế các kiểu thì đúng là đã tù càng tù thêm. Có điều vị tướng này bị cấm khá nhiều nên bạn có thể dùng các vị tướng mid phía dưới đây."
            },
            {
                "id": "dirak",
                "reason": "Dirak cực kì thích gặp các kèo đánh gần mà chậm chạp như Tachi vì có thể thoải mái dồn cầu đến chết thì thôi. Tachi không thể đe dọa được Dirak vì vị tướng này phải nói là trâu bò nhất nhì trong các tướng pháp sư mid."
            },
            {
                "id": "tulen",
                "reason": "Độ cơ động cao, chiêu lướt hồi liên tục của Tulen sẽ khiến cho Tachi cảm thấy tức tối vô cùng vì không thể chạm vào người vị tướng này. Nói chung kèo này thì Tulen chắc chắn sẽ vờn Tachi như mèo vờn chuột mà thôi."
            },
            {
                "id": "volkath",
                "reason": "Lượng dame, khả năng gây choáng kèm bất tử của Volkath có thể cân gần như bất kì tướng cận chiến nào kể cả Tachi. Kèo này cực kì dễ chơi, cứ lao vào quạt liên tục là Tachi không chạy nhanh là chỉ có toi."
            },
            {
                "id": "elandorr",
                "reason": "Eland’orr cực kì cơ động nên thả diều một con tướng khá tù như Tachi là quá dễ dàng, chưa kể chiêu 2 của vị tướng này có thể chặn được chiêu 1 Long phá của Tachi."
            },
            {
                "id": "hayate",
                "reason": "Sát thương chuẩn, dồn dame nhanh, cơ động cao, tất cả các yếu tố khiến Tachi phải ngán ngẩm đều có ở Hayate. Đao của Tachi thì to đấy nhưng chém không trúng rồi lại ăn một đống phi tiêu vào mặt thì cũng lên bảng sớm thôi."
            },
            {
                "id": "baldum",
                "reason": "Tachi tương đối mạnh mẽ trong combat đông người vì độ cứng cáp và phạm vi gây sát thương rộng, vì vậy không nên phí dame vào tướng tank mà tốt nhất hãy loại hắn khỏi cuộc chơi bằng chiêu úp mộ cuộc tình của Baldum."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "tamyn",
        "name": "Tamyn",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2026/07/Tamyn-100x100.webp",
        "win_rate": 49.7,
        "pick_rate": 3.6,
        "ban_rate": 2.2,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "mina",
                "reason": "Mina có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Tamyn theo dữ liệu meta."
            },
            {
                "id": "kaine",
                "reason": "Kaine có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Tamyn theo dữ liệu meta."
            },
            {
                "id": "dyadia",
                "reason": "Dyadia có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Tamyn theo dữ liệu meta."
            },
            {
                "id": "arthur",
                "reason": "Arthur có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Tamyn theo dữ liệu meta."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "teemee",
        "name": "TeeMee",
        "main_role": "SP",
        "tier": "S+",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/TeeMee.webp",
        "win_rate": 53.5,
        "pick_rate": 20.4,
        "ban_rate": 6.8,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "fennik",
                "reason": "Fennik có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế TeeMee theo dữ liệu meta."
            },
            {
                "id": "biron",
                "reason": "Biron có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế TeeMee theo dữ liệu meta."
            },
            {
                "id": "volkath",
                "reason": "Volkath có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế TeeMee theo dữ liệu meta."
            },
            {
                "id": "omen",
                "reason": "Omen có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế TeeMee theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "teeri",
        "name": "Teeri",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Teeri-100x100.webp",
        "win_rate": 51.7,
        "pick_rate": 7.7,
        "ban_rate": 3.7,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "ming",
                "reason": "Ming có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Teeri theo dữ liệu meta."
            },
            {
                "id": "moren",
                "reason": "Moren có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Teeri theo dữ liệu meta."
            },
            {
                "id": "astrid",
                "reason": "Astrid có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Teeri theo dữ liệu meta."
            },
            {
                "id": "ilumia",
                "reason": "Ilumia có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Teeri theo dữ liệu meta."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "telannas",
        "name": "Tel'Annas",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/TelAnnas.webp",
        "win_rate": 40,
        "pick_rate": 3.5,
        "ban_rate": 0,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "murad",
                "reason": "Murad có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Tel'Annas theo dữ liệu meta."
            },
            {
                "id": "nakroth",
                "reason": "Nakroth có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Tel'Annas theo dữ liệu meta."
            },
            {
                "id": "kriknak",
                "reason": "Kriknak có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Tel'Annas theo dữ liệu meta."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "thane",
        "name": "Thane",
        "main_role": "SP",
        "tier": "S+",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Thane.webp",
        "win_rate": 41.9,
        "pick_rate": 10.9,
        "ban_rate": 0.8,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "omen",
                "reason": "Omen có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Thane theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "theflash",
        "name": "The Flash",
        "main_role": "Mid",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/The-Flash.webp",
        "win_rate": 47.5,
        "pick_rate": 5.8,
        "ban_rate": 1.1,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "aleister",
                "reason": "Aleister có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế The Flash theo dữ liệu meta."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "thorne",
        "name": "Thorne",
        "main_role": "AD",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Thorne-100x100.webp",
        "win_rate": 46.2,
        "pick_rate": 3.2,
        "ban_rate": 2.4,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "murad",
                "reason": "Murad có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Thorne theo dữ liệu meta."
            },
            {
                "id": "nakroth",
                "reason": "Nakroth có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Thorne theo dữ liệu meta."
            },
            {
                "id": "kriknak",
                "reason": "Kriknak có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Thorne theo dữ liệu meta."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "toro",
        "name": "Toro",
        "main_role": "SP",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Toro-100x100.webp",
        "win_rate": 48.2,
        "pick_rate": 39.3,
        "ban_rate": 25.3,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "baldum",
                "reason": "Baldum là tướng sp counter sp hoàn hảo với 2 chiêu có thể loại Toro ra khỏi giao tranh nhằm bảo vệ đồng đội. Cách chơi chỉ đơn giản là khi thấy Toro lao vào chủ lực thì lập tức hất hoặc dùng chiêu cuối giam hắn xuống lòng đất là xong việc."
            },
            {
                "id": "annette",
                "reason": "Annette với khả năng hất văng và ngăn cản kẻ địch áp sát các tướng đồng minh trong một khoảng thời gian khá dài từ chiêu cuối sẽ biến Toro trở thành phế vật trong combat, trâu bò khó chịu đến mấy mà không húc được ai thì cũng vứt."
            },
            {
                "id": "hayate",
                "reason": "Toro cậy mình trâu bò nên các xạ thủ thông thường bắn vào chả khác gì muỗi đốt inox, chỉ có mỗi Hayate với lượng sát thương chuẩn chích thẳng vào máu là có thể gây áp lực lên con gia súc đó."
            },
            {
                "id": "lauriel",
                "reason": "Lauriel với khả năng bay lướt liên tục và sát thương phép cao có thể thả diều Toro cả ngày hoặc đơn giản là không quan tâm đến sự có mặt của hắn. Toro gần như không thể chạm được vào người Lauriel do chiêu thức quá chậm và không có khống chế cứng."
            },
            {
                "id": "florentino",
                "reason": "Florentino sở hữu độ cơ động cao và lượng sát thương chuẩn vô cùng dồi dào, có thể dễ dàng biến Toro thành thịt trâu gác bếp nếu hắn dám cản đường kiếm sĩ hào hoa."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "trieuvan",
        "name": "Triệu Vân",
        "main_role": "Top",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Trieu-Van-100x100.webp",
        "win_rate": 44.9,
        "pick_rate": 1.3,
        "ban_rate": 1.6,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "murad",
                "reason": "Triệu Tử Long nhưng mà lại không có ngựa thì làm sao mà đuổi được một con tướng biến ảo như Murad, kèo này Triệu Vân chỉ có thể chấp nhận bị cấu rỉa liên tục mà khó có thể làm gì được đối phương."
            },
            {
                "id": "elandorr",
                "reason": "Eland’orr là một vị tướng tay dài cơ động bậc nhất trong Liên Quân, kèm theo chiêu cuối đẩy văng các mục tiêu ở gần nên vị tướng này có khả năng thả diều Triệu Vân một cách mượt mà và đầy hiệu quả."
            },
            {
                "id": "florentino",
                "reason": "Độ cứng cáp và hồi phục của Triệu Vân sẽ dễ dàng bị sát thương chuẩn từ Florentino chọc thủng, thêm nữa sự kém cơ động từ hắn ta sẽ tạo điều kiện thuận lợi cho Flo thả, nhặt hoa và múa dễ dàng hơn rất nhiều."
            },
            {
                "id": "allain",
                "reason": "Nếu bạn muốn khắc chế Triệu Vân nhưng lại thích sự đơn giản thì hãy pick ngay Allain, bởi vì cách khắc chế hắn ta bằng Allain đơn giản là lao lên mà solo trực diện từ đầu cho đến cuối trận đấu."
            },
            {
                "id": "omen",
                "reason": "Omen khắc chế Triệu Vân không phải ở khả năng solo 1 vs 1 mà chính là chiêu cuối Sát Vực của anh ta. Triệu Vân có chiêu 1 Long huyết không sợ các khống chế thông thường nhưng khi bị trói bởi chiêu cuối của Omen thì hắn sẽ trở nên phế hơn rất nhiều trong các combat."
            },
            {
                "id": "aleister",
                "reason": "Chiêu 1 Long huyết của Triệu Vân có thể giải hầu hết các khống chế nhưng đối với áp chế cứng từ chiêu cuối của Aleister thì bó tay cho nên chỉ cần một phát bấm của vị tướng này sẽ khiến Triệu Tử Long biến thành Triệu Tử Vong trong các giao tranh."
            },
            {
                "id": "lauriel",
                "reason": "Vân Ca được liệt vào danh sách những Mỹ Nam hàng đầu trong Tam Quốc nhưng muốn chạm tay vào một thiên thần xứ trời Âu như Lauriel lại không hề dễ dàng. Với chiêu 2 có khả năng lặn liên tục, Lauriel có thể thoải mái vờn Triệu Vân như mèo vờn chuột."
            },
            {
                "id": "arum",
                "reason": "Vị tướng hỗ trợ có áp chế cứng này sẽ khiến Triệu Vân không thể áp sát và gây sát thương lên những vị tướng quan trọng trong đội hình team bạn, ngoài ra cô ấy cũng đủ sức chống chịu với lượng dame lớn từ những cú đâm của Triệu Tử Long."
            },
            {
                "id": "baldum",
                "reason": "Baldum trâu bò không dễ gì bị bốc hơi bởi Triệu Vân, thêm nữa là chiêu 1 Long huyết xóa khống chế của Triệu Tử Long không có tác dụng gì khi bị Baldum hất hoặc sử dụng Địa Giam dìm hắn xuống đất."
            },
            {
                "id": "hayate",
                "reason": "Như đã nói thì Triệu Vân rất cứng cáp nên những vị tướng xạ thủ thông thường sẽ gặp nhiều khó khăn khi đối đầu với hắn, giải pháp chính là pick Hayata với khả năng gây sát thương chuẩn kèm độ cơ động cao hoàn toàn đủ sức để thả diều rồi hạ gục Vân Ca."
            },
            {
                "id": "fennik",
                "reason": "Khả năng giữ khoảng cách tốt, chí mạng nhiều, làm chậm liên tục, Tất cả các đặc tính của Fennik đều rất phù hợp để đối đầu với một con tướng không quá cơ động như Triệu Tử Long."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "tulen",
        "name": "Tulen",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Tulen.webp",
        "win_rate": 54.4,
        "pick_rate": 16.9,
        "ban_rate": 22.2,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "zata",
                "reason": "Với chiêu cuối “Thiên dực”, Zata dễ dàng né tránh bộ combo gây sát thương của Tulen, đồng thời có thể áp sát kể cả khi Tulen lướt đi và dồn sát thương hạ gục hắn ta nhanh chóng."
            },
            {
                "id": "lauriel",
                "reason": "Lauriel với khả năng lặn né chiêu kèm hồi phục liên tục giúp vị tướng này dễ dàng áp đảo Tulen trong các pha trao đổi chiêu thức. Chú ý câu chiêu lướt Lôi động của hắn ta trước khi thực hiện các pha dồn dame."
            },
            {
                "id": "paine",
                "reason": "Chiêu cuối của Paine sẽ giúp vị tướng này tiếp cận được Tulen từ khoảng cách xa một cách bất ngờ, sau đó làm hắn câm lặng rồi dồn sát thương khiến Tulen nhanh chóng bốc hơi mà không kịp phản ứng."
            },
            {
                "id": "kaine",
                "reason": "Nhờ khả năng tàng hình và dồn sát thương nhanh chóng, Kaine có thể bắt lẻ Tulen rất hiệu quả khi hắn không kịp phòng bị. Lưu ý sử giữ chiêu cuối để có thể dí theo Tulen trong trường hợp hắn kịp lướt đi."
            },
            {
                "id": "boltbaron",
                "reason": "Bolt Baron có thể lướt liên tục và chiêu cuối di chuyển vượt địa hình nên hoàn toàn đủ độ cơ động để đuổi theo Tulen, đồng thời tấn công hắn với sải tay dài. Lưu ý nếu Tulen quá xanh thì nên trang bị một món đồ kháng phép để tránh sốc chết."
            },
            {
                "id": "florentino",
                "reason": "Với khả năng cơ động, hồi phục mạnh và gây choáng liên tục từ các pha thả hoa, Florentino dễ dàng tiếp cận và áp đảo Tulen khi giao tranh. Lưu ý thả hoa cho chuẩn và giữ chiêu cuối để sẵn sàng lướt theo khi Tulen chạy trốn."
            },
            {
                "id": "zuka",
                "reason": "Zuka có thể lướt và gây sát thương dồn dập từ bộ combo chiêu thức rất dài, dễ dàng bắt và kết liễu Tulen. Ngoài ra Zuka khá cứng cáp nên không hề sợ bị hắn ta dồn dame chết ngược."
            },
            {
                "id": "thane",
                "reason": "Thane có nhiều khống chế cứng và độ trâu bò nên cực kì thích hợp để khắc chế khả năng bay nhẩy cũng nhưng lượng dame sốc từ Tulen. Luôn di chuyển cạnh chủ lực để sẵn sàng chắn Lôi điểu , đồng thời tìm cách khống chế hắn cho đồng đội tiêu diệt."
            },
            {
                "id": "yorn",
                "reason": "Để chọn AD đối đầu hiệu quả với Tulen, bạn nên chọn các xạ thủ có khả năng sốc dame nhanh và mạnh khi đủ đồ để khiến hắn không có cơ hội bay nhảy. Chính vì vậy Yorn là một sự lựa chọn tối ưu cho mục đích này."
            },
            {
                "id": "violet",
                "reason": "Cũng giống như Yorn, Violet sốc dame rất mạnh kèm tầm chiêu dài rất phù hợp để hạn chế tối đa khả năng cơ động bay nhảy của Tulen."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "valhein",
        "name": "Valhein",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Valhein-100x100.webp",
        "win_rate": 42,
        "pick_rate": 17.5,
        "ban_rate": 15.2,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "stuart",
                "reason": "Với sải tay dài và khả năng miễn nhiễm sát thương vật lý, Stuart dễ dàng đè đường Valhein từ giai đoạn đầu đến cuối trận đấu. Lưu ý sử dụng chiêu cuối khéo léo để giữ khoảng cách tránh bị hắn choáng rồi dồn sát thương."
            },
            {
                "id": "elsu",
                "reason": "Khả năng cấu rỉa từ khoảng cách cực xa của Elsu giúp vị tướng này dễ dàng gây áp lực lên Valhein với tầm tay ngắn và cực thiếu cơ động, luôn lưu ý kiểm soát tầm nhìn và khoảng cách để tránh bị hắn áp sát bất ngờ."
            },
            {
                "id": "ybneth",
                "reason": "Với khả năng chống chịu mạnh mẽ và kỹ năng khống chế diện rộng, Y’Bneth là một con tướng hỗ trợ cực kì khó chịu đối với sự thiếu cơ động của Valhein. Liên tục bám sát làm choáng, chậm khiến Valhein không thể rảnh tay farm, đồng thời tạo cơ hội cho đồng đội dồn dame hắn."
            },
            {
                "id": "murad",
                "reason": "Khả năng áp sát nhanh, gây dame rồi rút lui an toàn giúp Murad liên tục gây áp lực và tiêu diệt Valhein dễ dàng mà hắn chỉ có thể bất lực nhìn bạn làm điều đó vì lấy gì mà đuổi theo."
            },
            {
                "id": "rourke",
                "reason": "Chiêu 2 Lời nguyền tử vong của Valhein hoàn toàn vô dụng trước khả năng miễn khống chế từ Rourke, thêm vào đó hắn ta không thể chịu nổi quá 2 phát bắn với sát thương khổng lồ khi áp sát của vị tướng này."
            },
            {
                "id": "veera",
                "reason": "Sở hữu khả năng khống chế mạnh và sát thương phép cao, Veera dễ dàng bắt lẻ và dứt điểm Valhein bằng combo kỹ năng. Lưu ý có thể nấp bụi hoặc sử dụng Tốc Biến để khiến hắn bất ngờ."
            },
            {
                "id": "ignis",
                "reason": "Khả năng gây sát thương liên tục và gây khống chế từ xa giúp Ignis liên tục áp đảo Valhein trong các pha giao tranh, hạn chế cực tốt lối đánh lăn cầu tuyết đặc trưng của hắn ta."
            },
            {
                "id": "raz",
                "reason": "Raz với khả năng áp sát kèm dồn dame nhanh cũng là một sự lựa chọn rất tốt để khắc chế Valhein , hãy khéo léo combo một cách mượt mà để hắn ta không thể tung được choáng là Raz sẽ dễ dàng đưa được Valhein lên bảng đếm số."
            },
            {
                "id": "bijan",
                "reason": "Bijan là một ứng cử viên sáng giá nếu bạn muốn trị Valhein kể cả khi không đi cùng lane với hắn, khi vừa đạt cấp độ 4 là Bijan sẽ có thể chở anh em trên con chiến mã của mình đi săn con tướng cực thiếu cơ động như Valhein."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "veera",
        "name": "Veera",
        "main_role": "Mid",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Veera-100x100.webp",
        "win_rate": 48,
        "pick_rate": 2.3,
        "ban_rate": 2.9,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "lauriel",
                "reason": "Lauriel với khả năng né chiêu cực tốt dễ dàng hóa giải choáng và combo từ Veera. Lưu ý tìm cách áp sát nhưng cần giữ chiêu 2 để né choáng sau đó dồn sát thương liên tục khiến Veera không thể chạy thoát."
            },
            {
                "id": "paine",
                "reason": "Chiêu cuối của Paine sẽ giúp vị tướng này đột ngột tiếp cận được Veera từ khoảng cách xa, sau đó làm cô ta câm lặng rồi dồn sát thương khiến Veera nhanh chóng lên bảng đếm số mà không kịp phản ứng."
            },
            {
                "id": "murad",
                "reason": "Khả năng áp sát nhanh và không bị chọn làm mục tiêu giúp Murad tránh né choáng của Veera dễ dàng, ngoài ra vì độ cơ động của cô ta rất thấp nên vô cùng khó để thoát được những pha chiêu cuối từ Murad"
            },
            {
                "id": "florentino",
                "reason": "Florentino sở hữu độ cơ động cao, miễn khống và độ cứng cáp tốt nên việc vị tướng này khắc chế được Veera là hoàn toàn dễ hiểu. Chỉ cần lưu ý việc nên áp sát cô ta trước khi dùng chiêu 3 để tránh bị choáng trên đường lướt tới."
            },
            {
                "id": "chaugnar",
                "reason": "Với khả năng giải hiệu ứng khống chế diện rộng từ chiêu cuối “Vực hỗn loạn”, Chaugnar dễ dàng giúp đồng đội tránh khỏi các pha choáng nguy hiểm từ Veera, thêm nữa hãy tận dụng tốt độ trâu bò của mình để dí sát khiến chiêu 3 Tiểu quỷ của cô ta bị phân tán sát thương."
            },
            {
                "id": "toro",
                "reason": "Toro với khả năng chống chịu cao, bám đuổi tốt và kỹ năng vừa miễn khống vừa có khống chế khiến Veera cực kì ức chế vì bị quấy rối liên tục, làm cô ta xả dame không được mà chạy cũng không xong."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "veres",
        "name": "Veres",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Veres-100x100.webp",
        "win_rate": 53.9,
        "pick_rate": 17.8,
        "ban_rate": 24.8,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "florentino",
                "reason": "Florentino vẫn luôn là vua solo đường top từ khi vị tướng này xuất hiện đến nay, đặc biệt là với các kèo cận chiến và Veres đương nhiên là cũng không phải ngoại lệ. Bộ chiêu của Veres hoàn toàn không phát huy được sức mạnh khi bị Flo liên tục áp sát chọc liên tục, gần như chỉ có thể ôm trụ nếu gặp phải một Florentino biết múa."
            },
            {
                "id": "amily",
                "reason": "Amily có bộ chiêu thức có cùng đặc tính với Florentino ở khả năng áp sát cực nhanh và gây sốc sát thương mạnh, chính vì vậy vị tướng này sẽ cực kì phù hợp để tránh đi những cú quét xích từ Veres và nhanh chóng hạ gục cô ta."
            },
            {
                "id": "allain",
                "reason": "Khả năng sốc sát thương từ Allain mặc dù không quá mạnh nhưng độ cứng cáp kèm hồi phục lại vô cùng tốt. Đây là một sự lựa chọn vừa đơn giản vừa hiệu quả vì chỉ cần lao lên và spam nút tấn công liên tục là đã khiến Veres cực kì khó chơi rồi."
            },
            {
                "id": "lauriel",
                "reason": "Khả năng gây sát thương của Veres chủ yếu nằm ở các cú quét nội tại Huyết xích và thời gian tung chiêu này khá là chậm, chính vì vậy Lauriel sẽ né bằng Đôi Cánh Thuần Khiết một cách cực kì đơn giản và phản công đưa Veres lên bảng đếm số."
            },
            {
                "id": "ignis",
                "reason": "Khả năng cơ động của Veres không thực sự vượt trội nên sẽ cực kì dễ bị thả diều bởi Ignis, chỉ cần bạn luôn giữ khoảng cách an toàn và rút ra nhanh khi Veres dùng Đoạt mệnh xích lao vào rồi tiếp tục rỉa nó cho đến chết."
            },
            {
                "id": "hayate",
                "reason": "Hayate luôn là một xạ thủ được yêu thích để đối phó với các con tướng đấu sĩ vì độ cơ động cao kèm nhiều sát thương chuẩn giúp đục qua lớp giáp của các con tướng đó. Cách chơi Hayate cũng giống các vị tướng ở trên là giữ khoảng cách và cấu rỉa từ xa cho đến khi cảm thấy đủ sát thương để hạ gục thì có thể dùng Bão phi tiêu bay vào đưa Veres về bệ đá cổ."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "violet",
        "name": "Violet",
        "main_role": "AD",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Violet-100x100.webp",
        "win_rate": 69.6,
        "pick_rate": 8.1,
        "ban_rate": 5,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "stuart",
                "reason": "Violet dồn sát thương chủ yếu bằng chiêu chứ không phải đánh thường nên Stuart cực kì thích vì chỉ cần bật miễn stvl đúng thời điểm là sẽ đỡ được gần như toàn bộ dame từ cô ta."
            },
            {
                "id": "toro",
                "reason": "Toro là một trong số ít tướng hỗ trợ thuần có khả năng bám đuổi sát theo muc tiêu nên rất phù hợp để dí theo 1 con Violet lăn lộn liên tục, hơn nữa độ trâu bò và nhiều khống chế của vị tướng này sẽ khiến Violet cực kì khó chơi."
            },
            {
                "id": "enzo",
                "reason": "Violet không quá mạnh ở các đòn đánh tay mà là mạnh ở khả năng lăn lộn liên tục vì vậy cần phải xích cô ta lại và Enzo chính là vị tướng có thể làm được điều đó."
            },
            {
                "id": "arduin",
                "reason": "Arduin đã siêu cứng cáp còn có bộ kĩ năng vừa áp sát vừa hất tung là ác mộng đối với các con tướng máu giấy và Violet cũng không ngoại lệ, Arduin có thể cho Violet bắn cả ngày nhưng chỉ cần một lần hất tung trúng thôi là cô ta lên bảng chắc khỏi cần nghi ngờ."
            },
            {
                "id": "billow",
                "reason": "Billow sở hữu khả năng săn mồi thuộc hàng top đầu trong Liên Quân, tốc độ di chuyển nhanh, dame to, độ chính xác cao toàn là những yếu tố đặc trị Violet cực hiệu quả."
            },
            {
                "id": "veera",
                "reason": "Violet có lăn lộn kiểu gì cũng không thể né được choáng và chiêu cuối từ Veera, thậm chí chiêu 1 cũng đã khó né rồi vì phạm vi quá rộng. Chỉ cần sơ suất nhỏ thôi là Violet chắc chắn phải lên bảng đếm số khi gặp Veera."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "volkath",
        "name": "Volkath",
        "main_role": "Top",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Volkath.webp",
        "win_rate": 52.6,
        "pick_rate": 6.7,
        "ban_rate": 3.3,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "omen",
                "reason": "Khi cầm Omen bạn hãy tập trung đánh thường và giữ chiêu cuối để khóa Volkath. Khi Volkath bật chiêu cuối bạn hãy nhanh chóng áp sát trói lại, đứng trong lồng đánh đều tay là Volkath gần như phế trong combat vì không thể tiếp cận chủ lực đối phương."
            },
            {
                "id": "roxie",
                "reason": "Đây là một kèo cực khó chịu cho Volkath. Khi đi lane, Roxie cứ chạy vòng quanh, đốt máu liên tục. Khi Volkath lao vào, bạn chỉ cần bật chiêu cuối kéo nó xa ra khỏi mục tiêu hoặc đưa vào vị trí hiểm để cho đồng đội hấp diêm."
            },
            {
                "id": "marja",
                "reason": "Volkath mà gặp phải Marja thì gần như khóc thét vì con tướng này có thể liên tục cấu rỉa, hút máu và giữ khoảng cách. Khi Volkath bật chiêu cuối lao vào, Marja chỉ cần lặn xuống né dame, kéo dài thời gian để Volkath hết trạng thái bất tử rồi làm thịt hắn ta."
            },
            {
                "id": "murad",
                "reason": "Murad là một kèo để câu Bất Tử của Volkath cực kì hiệu quả. Hãy đánh theo kiểu hit & run lao vào cấu rỉa rồi rút ra ngay, tuyệt đối không đứng đánh tay đôi lâu. Volkath rất ngại kiểu đánh vào xong biến mất như Murad vì vừa leo lên ngựa thì không còn mục tiêu nào để mà chém nữa."
            },
            {
                "id": "liliana",
                "reason": "Liliana sẽ gây ức chế cực mạnh cho Volkath với độ cơ động của mình. Hãy giữ form người để cấu rỉa từ xa, tuyệt đối không lao lên trước. Khi Volkath bật chiêu cuối, chỉ cần lùi lại, chờ hết bất tử rồi chuyển form cáo dồn sát thương kết liễu."
            },
            {
                "id": "ishar",
                "reason": "Volkath mà gặp phải Ishar thì chỉ có chán luôn, tung chiêu thì bị Tí Nị che mất, lên ngựa thì bị trói lại không chạy được đi đâu. Cách chơi là đặt Tí Nị án ngữ phía trước, liên tục làm chậm và cấu rỉa. Khi Volkath lao vào, bật nhanh chiêu cuối để nhốt nó vào lồng khỏi quẩy luôn."
            },
            {
                "id": "baldum",
                "reason": "Volkath cực ghét Baldum. Hất văng, ép vị trí, ulti nhốt lại khiến Volkath không thể tiếp cận chủ lực. Cách chơi quá đơn giản là chỉ cần canh Volkath lên ngựa là bạn dùng chiêu cuối úp mộ cuộc tình nó xuống là xong."
            },
            {
                "id": "gildur",
                "reason": "Gildur có quá nhiều khống chế từ cự ly xa đến gần nên việc phá đám Volkath là cực kì đơn giản. Bạn có thể tung choáng từ xa mỗi khi Volkath tiếp cận đồng đội hoặc gồng chiêu cuối khóa cứng khi hắn ta đang ở trên ngựa để ngăn Volkath kích hoạt hiệu ứng Bất Tử."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "wiro",
        "name": "Wiro",
        "main_role": "SP",
        "tier": "C",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Wiro.webp",
        "win_rate": 50,
        "pick_rate": 2.1,
        "ban_rate": 0,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "dirak",
                "reason": "Dirak có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Wiro theo dữ liệu meta."
            },
            {
                "id": "erin",
                "reason": "Erin có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Wiro theo dữ liệu meta."
            },
            {
                "id": "krixi",
                "reason": "Krixi có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Wiro theo dữ liệu meta."
            },
            {
                "id": "bijan",
                "reason": "Bijan có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Wiro theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "wisp",
        "name": "Wisp",
        "main_role": "AD",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Wisp.webp",
        "win_rate": 56.9,
        "pick_rate": 22.8,
        "ban_rate": 4,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "murad",
                "reason": "Murad có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Wisp theo dữ liệu meta."
            },
            {
                "id": "nakroth",
                "reason": "Nakroth có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Wisp theo dữ liệu meta."
            },
            {
                "id": "kriknak",
                "reason": "Kriknak có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Wisp theo dữ liệu meta."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "wonderwoman",
        "name": "Wonder Woman",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Wonder-Woman.webp",
        "win_rate": 52.1,
        "pick_rate": 10,
        "ban_rate": 9.2,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "enzo",
                "reason": "Wonder Woman tuy có một chút cơ động nhưng do tầm quá ngắn nên rất khó thoát ra được các cú móc từ Enzo, mà khi đã bị móc thì Wonder Woman cực kỳ khó chơi vì Enzo có thể ngăn chặn cô ta tiếp cận các mục tiêu mà cô ta muốn."
            },
            {
                "id": "florentino",
                "reason": "Hầu như tất cả các đấu sĩ đều sợ khi phải solo tay đôi với Florentino và Wonder Woman cũng không ngoại lệ. Chỉ cần Flo tung chiêu cuối trúng để kích hoạt miễn nhiễm không chế là có thể vờn Wonder Woman cho đến chết một cách dễ dàng."
            },
            {
                "id": "dirak",
                "reason": "Dirak là một sự lựa chọn rất phù hợp để khắc chế Wonder Woman trong các combat. Với độ cứng cáp, bộ chiêu thức gây sát thương và hiệu ứng cực mạnh theo thời gian, Dirak vừa có thể gây khó khăn cho Wonder Woman gây sát thương lên mục tiêu vừa có thể cấu máu thậm chí tiễn cô ta lên đường luôn."
            },
            {
                "id": "baldum",
                "reason": "Baldum counter Wonder Woman theo kiểu “đánh gãy nhịp”. Khi Wonder Woman lao vào mở giao tranh, Baldum không cần lao theo mà chỉ cần đợi đúng thời điểm để hất và nhốt. Chiêu cuối của Baldum có thể tách Wonder Woman khỏi đội hình hoặc nhốt cô ta lại để đồng đội dồn sát thương. Khi bị kéo vào thế đánh lâu với Baldum, Wonder Woman gần như không còn tác dụng."
            },
            {
                "id": "capheny",
                "reason": "Capheny khắc chế Wonder Woman nhờ khả năng vừa di chuyển vừa gây sát thương liên tục. Khi chơi Capheny, điều quan trọng là lách bắn khéo léo để né đi chiêu 2 Dây thừng chân thật . Wonder Woman rất khó tiếp cận Capheny nếu không có góc đẹp, và chỉ cần bị bắn vài giây là lượng máu sẽ tụt nhanh dù có trâu đến đâu. Về cuối game, Capheny gần như khiến Wonder Woman không dám lao thẳng vào combat."
            },
            {
                "id": "hayate",
                "reason": "Hayate là khắc tinh của mọi đấu sĩ trâu bò, và Wonder Woman cũng không ngoại lệ. Với sát thương chuẩn và nhiều kỹ năng lướt, Hayate có thể vừa gây sát thương, vừa né kéo khống chế. Cách chơi hiệu quả là giữ chiêu lướt để né chiêu 2 Dây thừng chân thật , không dùng bừa. Khi đã có đủ đồ, Hayate chỉ cần đứng bắn là Wonder Woman sẽ mất máu rất nhanh, không thể duy trì lâu như cô ta mong muốn."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "xeniel",
        "name": "Xeniel",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Xeniel.webp",
        "win_rate": 51.4,
        "pick_rate": 8.3,
        "ban_rate": 7.6,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "omen",
                "reason": "Omen có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Xeniel theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "ybneth",
        "name": "Y’bneth",
        "main_role": "SP",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Ybneth-100x100.webp",
        "win_rate": 50,
        "pick_rate": 30.2,
        "ban_rate": 13.4,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "thane",
                "reason": "Thane có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Y’bneth theo dữ liệu meta."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "yan",
        "name": "Yan",
        "main_role": "Jungle",
        "tier": "S+",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Yan-100x100.webp",
        "win_rate": 33.3,
        "pick_rate": 2.1,
        "ban_rate": 0,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "murad",
                "reason": "Murad là kèo đi rừng khắc chế Yan cực kỳ hiệu quả, bộ combo áp sát nhanhn dồn sát thương rồi lại lùi về an toàn sẽ khiến cho Yan gần như là bất lực trong giai đoạn đầu và bị thọt, điều này khiến cho hắn khó mà phát huy được sức mạnh trong cả trận đấu."
            },
            {
                "id": "elandorr",
                "reason": "Tuy Yan khá là cơ động nhưng vẫn kém xa so với Eland’orr, vị tướng thích tìm hoa bắt bướm này hoàn toàn đủ khả năng để outplay Yan và khiến cho cuộc sống của hắn trở nên khó khăn hơn rất nhiều."
            },
            {
                "id": "florentino",
                "reason": "Nếu nói về các pha giao tranh cận chiến thì Florentino gần như là vô địch nếu bạn có đủ kỹ năng, vì thế cho nên đây chính là một kèo cực khó dành cho Yan nhất là khi hắn đi đường Tà Thần, bạn chỉ cần lưu ý thả hoa cho cẩn thận để tránh bị miss khi Yan thực hiện những cú lướt là kèo này ăn chặt."
            },
            {
                "id": "aleister",
                "reason": "Sức mạnh của Yan nằm rất nhiều ở độ cơ động từ những cú lướt liên tục của hắn ta, và điều này sẽ trở nên vô dụng trước các pha áp chế cứng của Aleister, đặc biệt là chiêu cuối của vị tướng này hồi chiêu rất nhanh sẽ biến Yan trở nên vô dụng trong các combat."
            },
            {
                "id": "hayate",
                "reason": "Để đặc trị được độ cơ động của Yan thì bắt buộc phải chọn tướng xạ thủ cơ động hơn và không ai thích hợp hơn là Hayate, ngoài ra lượng sát thương chuẩn dồi dào của vị tướng ninja này sẽ tạo áp lực tương đối lớn lên một con tướng đấu sĩ như Yan."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "yena",
        "name": "Yena",
        "main_role": "Top",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Yena-100x100.webp",
        "win_rate": 52.6,
        "pick_rate": 20,
        "ban_rate": 1.6,
        "attributes": {
            "damage": 3,
            "tankiness": 4,
            "mobility": 2,
            "teamfight": 4,
            "split_push": 4
        },
        "counters": [
            {
                "id": "marja",
                "reason": "Khi bạn cầm Marja đi đường tà thần thì Yena không có cửa để solo, chỉ cần bạn nối chiêu 2 hút dame cô ta sau đó giữ cự ly để đánh thường và dùng các chiêu thức còn lại cho phù hợp là chắc chắn khắc chế đc Yena"
            },
            {
                "id": "omen",
                "reason": "Lượng sát thương và hiệu ứng của Yena tuy lớn nhưng không đủ để hạ gục một tướng đấu sĩ tanker như Omen, thêm vào đó khả năng cơ động của cô ta cũng gần như phế khi bị Omen xích lại rồi chém liên tục."
            },
            {
                "id": "arthur",
                "reason": "Như đã nói ở phần ưu nhược điểm, Yena phụ thuộc khá nhiều vào chiêu thức và khi gặp tướng có khả năng gây câm lặng như Arthur là cô ta bó tay ngay, mà kể cả có dùng được chiêu thì cũng rất khó để hạ gục một tanker như vị tướng này."
            },
            {
                "id": "boltbaron",
                "reason": "Sải tay dài với khả năng spam lướt, đẩy lùi liên tục kèm chiêu 3 miễn hoàn toàn khống chế, Bolt Baron rõ ràng là khắc tinh của một con tướng đánh gần như Yena tại đường top."
            },
            {
                "id": "skud",
                "reason": "Đây cũng là một con tướng khắc chế tốt Yena với độ chống chịu cao kèm lượng sát thương phép có thể sốc chết cô ta trong một thời gian ngắn."
            },
            {
                "id": "lauriel",
                "reason": "Lauriel với chiêu 2 lặn liên tục sẽ khiến cho Yena rất khó khăn trong việc thực hiện các combo dài đằng đẵng của mình, ngoài ra với độ cơ động cao Lauriel hoàn toàn có thể dí và dồn sát thương phép Yena đến chết."
            },
            {
                "id": "baldum",
                "reason": "Khi chọn tướng support để khắc chế Yena, bạn cần chọn những con tướng trâu bò và có khống chế cứng sẽ không sợ những pha núp bụi dồn dame bất ngờ của cô ta đồng thời có thể ngăn cản Yena dồn dame chủ lực hoặc chạy trốn."
            },
            {
                "id": "thane",
                "reason": "Cũng giống như Baldum, Thane rất trâu bò chấp cho Yena dồn sát thương các kiểu sau đó đẩy cô ta về vị trí bất lợi cho đồng đội tiêu diệt."
            }
        ],
        "tags": [
            "top",
            "crawled"
        ]
    },
    {
        "id": "yorn",
        "name": "Yorn",
        "main_role": "AD",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Yorn-100x100.webp",
        "win_rate": 49.2,
        "pick_rate": 10.8,
        "ban_rate": 8.7,
        "attributes": {
            "damage": 5,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 4,
            "split_push": 3
        },
        "counters": [
            {
                "id": "elsu",
                "reason": "Độ cơ động của Yone gần như không có, điều này khiến cho hắn ta mặc dù bắn đau nhưng chẳng bao giờ chạm được vào Elsu. Ngoài ra vì quá tù nên Yorn cũng cực kì khó né Viễn trình kích của vị tướng này."
            },
            {
                "id": "celica",
                "reason": "Thực ra Celia là một xạ thủ rất mạnh nhưng không được ưa chuộng bởi vì chiêu của cô ấy khá là dễ né, nhưng điều này lại không thể được thực hiện bởi một con tướng cực thiếu cơ động như Yorn. Với lượng dame khổng lồ và phạm vi cực xa của chiêu cuối, Celia sẽ dễ dàng đưa Yorn về thành dưỡng sức trong các combat đông người."
            },
            {
                "id": "stuart",
                "reason": "Stuart tuy sát thương không phải là lớn nhưng lại mạnh hơn Yorn rõ ràng trong giai đoạn đầu game. Kèm theo bộ chiêu miễn nhiễm sát thương vật lý, vị tướng này chắc chắn sẽ ép cho Yorn không thở nổi."
            },
            {
                "id": "grakk",
                "reason": "Như đã nói Yorn chỉ có cách di chuyển duy nhất là chạy bộ, kèm theo tầm bắn khá ngắn nên sẽ là một mục tiêu ngon ăn cho những cú kéo của Grakk. Đây sẽ là một con tướng hỗ trợ luôn gây được áp lực lên Yorn từ đầu cho đến cuối trận."
            },
            {
                "id": "aoi",
                "reason": "Aoi là một tướng sát thủ có độ cơ động cực cao, điều quan trọng hơn nữa khả năng sốc dame kèm chiêu cuối không thể bị chọn làm mục tiêu sẽ cực kỳ phù hợp để hạ gục nhanh một con xạ thủ sát thương cực mạnh về late như Yorn."
            },
            {
                "id": "yue",
                "reason": "Yue là thiếu tướng cực kỳ thích những kèo cơ động cùi bắp như Yorn, chỉ cần Yorn dám đứng bắn trong tầm chiêu của Yue là hắn hoàn toàn có thể bị bốc hơi ngay lập tức với chỉ một cú cắt đẹp."
            }
        ],
        "tags": [
            "ad",
            "crawled"
        ]
    },
    {
        "id": "yue",
        "name": "Yue",
        "main_role": "Mid",
        "tier": "S+",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Yue-100x100.webp",
        "win_rate": 54.1,
        "pick_rate": 13,
        "ban_rate": 8.6,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "iggy",
                "reason": "Tay Yue tuy dài nhưng Iggy còn dài hơn, chưa kể đến Iggy cực kì linh hoạt có thể vừa dùng chiêu vừa di chuyển nên việc Yue chạm được vào người vị tướng này là không hề dễ dàng."
            },
            {
                "id": "kahlii",
                "reason": "Tầm đánh của Kahlii cũng như giống Iggy là cực kì xa nên dễ dàng áp chế được Yue mà không để cô ta có cơ hội phản công. Luôn duy trì áp lực từ xa và đảm bảo Yue không thể thu hẹp khoảng cách để gây dame lên bạn."
            },
            {
                "id": "theflash",
                "reason": "The Flash có tốc độ di chuyển cao, khả năng áp sát, dồn dame nhanh đều là các yếu tố khiến Yue phải sợ hãi. Cách chơi vị tướng này cũng vô cùng đơn giản, chỉ việc lao vào dồn sát thương rồi lùi ra là Yue chỉ có khóc."
            },
            {
                "id": "nakroth",
                "reason": "Cơ động siêu cao với nhiều chiêu lướt, kèm theo khả năng kháng khống chế biến Nakroth thành nỗi ác mộng đối với Yue. Khéo léo sử dụng chiêu vừa né các pha cắt vừa tiếp cận Yue, kích hoạt miễn khống hợp lý để vô hiệu đẩy lùi Đạo quân vương ."
            },
            {
                "id": "aoi",
                "reason": "Aoi cực kì linh hoạt với chiêu thức đu dây kèm chiêu cuối không thể bị chọn làm mục tiêu nên rất phù hợp để trị một con tướng thiếu cơ động như Yue. Nên tích 2 lần đu để có thể tiếp cận lại sau khi bị đẩy ra bởi chiêu cuối Đạo quân vương ."
            },
            {
                "id": "kaine",
                "reason": "Khả năng tàng hinh giúp Kaine có thể âm thầm áp sát Yue, sau đó làm choáng và nhanh chóng dồn dame. Điểm đặc biệt của vị tướng này là có thể sử dụng chiêu cuối đúng lúc nhằm truy đuổi đồng thời né đi cú đẩy lùi từ Yue."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "zata",
        "name": "Zata",
        "main_role": "Mid",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Zata-100x100.webp",
        "win_rate": 51.4,
        "pick_rate": 24.6,
        "ban_rate": 42.7,
        "attributes": {
            "damage": 4,
            "tankiness": 1,
            "mobility": 3,
            "teamfight": 5,
            "split_push": 2
        },
        "counters": [
            {
                "id": "liliana",
                "reason": "Độ cơ động của Liliana phải được xếp vào hàng đầu trong số các tướng pháp sư đường giữa, nên việc né đi các combo lướt rồi bay lên của Zata dễ như ăn kẹo. Bonus thêm sải tay dài hơn và có choáng sẽ giúp vị tướng này hoàn toàn trên cơ Zata, chỉ cần lưu ý luôn giữ một chiêu lướt sẵn sàng để đề phòng khi hắn ta chưa bay lên."
            },
            {
                "id": "veera",
                "reason": "Zata rất ngán Veera vì chiêu choáng của vị tướng này rất như rất khó để né và khiến Zata cực kì khó chơi khi cần phải cần thời gian lấy đà mới có thể cất cánh. Khi cầm Veera thì bạn lưu ý hãy choáng sớm để tránh Zata bay lên kịp và bạn sẽ bị miss choáng."
            },
            {
                "id": "boltbaron",
                "reason": "Với cơ chế lướt liên tục từ chiêu 1 thì Bolt Baron hoàn toàn nắm thế chủ động kể cả trong các pha né tránh chiêu hoặc truy đuổi Zata. Thậm chí khi Zata bay lên, bạn còn có thể kích hoạt chiêu cuối bay cao hơn rồi cho hắn ta ăn chích điện thay cơm khi dám hạ cánh ở sân bay Campuchia."
            },
            {
                "id": "nakroth",
                "reason": "Thật sự Zata nhìn thấy Nakroth thì chán luôn, lướt lướt chuẩn bị bay lên thì Nak nó đã nhảy khỏi tầm rồi sau khi hạ cánh thì lại bị Nak áp sát tấn công. Nói chung khi pick Nakroth, bạn chỉ cần lưu ý lướt ra khỏi tầm chiêu cuối của Zata nhưng chú ý hướng lướt có thể chặn luôn đường lui của hắn ta."
            },
            {
                "id": "aoi",
                "reason": "Aoi cũng giống như Nak ở độ cơ động cao và dame sốc nên rất phù hợp để đi săn Zata, thậm chí còn tốt hơn vì có chiêu cuối giật ra khỏi tầm chiêu 3 Thiên dực . Cách chơi cũng khá đơn giản, chỉ cần sử dụng 2 lần đu dây một cách hiệu quả để vừa nhảy khỏi tầm chiêu cuối từ Zata vừa chặn đầu làm thịt hắn."
            },
            {
                "id": "kaine",
                "reason": "Kaine có thể dễ dàng áp sát, làm choáng rồi sốc dame đưa Zata lên bảng đếm số trong tích tắc khiến hắn ta không kịp làm gì. Chưa kể chiêu cuối của Zata không gây dame được lên các kẻ địch tàng hình nên đây chính là sự lựa chọn cực tốt."
            },
            {
                "id": "quillen",
                "reason": "Cũng giống như Kaine thì Quillen có khả năng tàng hình nên rất dễ áp đảo được Zata khiến hắn muốn tấn công bạn không được mà đề phòng cũng vô cùng khó."
            },
            {
                "id": "zip",
                "reason": "Zata đang lấy đà cất cánh chuẩn bị thả bom mà gặp phải con Zip nó hút hết mục tiêu vào rồi lăn đi mất thì còn đánh đấm gì nữa. Chưa kể các pha nối dây gây choáng cũng cực kỳ dễ gây ức chế cho một con tướng có sải tay ngắn như Zata."
            },
            {
                "id": "thane",
                "reason": "Các chiêu thức với một đống hiệu ứng đẩy lùi, hất tung, choáng từ Thane đều có thể phá các cú lấy đà cất cánh từ Zata khiến hắn ta không thể bay lên được. Khi cầm Thane hãy luôn đứng cao để kịp thời phá Zata che chắn cho các đồng đội yêu thương ở phía sau."
            },
            {
                "id": "violet",
                "reason": "Khi chọn ad để khắc Zata thì điều quan trọng nhất là phải có chiêu lướt, thì Violet và Hayate là thích hợp nhưng Violet là phù hợp hơn bởi vì tầm đánh xa hơn và sốc dame nhanh hơn. Chơi xạ thủ thì đương nhiên bạn luôn cần giữ khoảng cách tốt với Zata và xả dame sau khi đã né được chiêu cuối của hắn ta là win kèo."
            },
            {
                "id": "hayate",
                "reason": "Với khả năng lướt thì Hayate cũng khiến Zata khá ngán ngẩm vì rất khó phát huy được sức mạnh của chiêu cuối. Khi chơi Hayate, bạn chỉ cần giữ chiêu lướt hoặc di chuyển nhấp nhả vào các bụi cỏ khiến Zata mất tầm nhìn và chiêu cuối của hắn ta mất tác dụng là gần như chắc thắng."
            }
        ],
        "tags": [
            "mid",
            "crawled"
        ]
    },
    {
        "id": "zephys",
        "name": "Zephys",
        "main_role": "Jungle",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Zephys.webp",
        "win_rate": 49.2,
        "pick_rate": 21.4,
        "ban_rate": 11.3,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "hayate",
                "reason": "Hayate có tỷ lệ thắng đối đầu cao và bộ chiêu thức khắc chế Zephys theo dữ liệu meta."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "zill",
        "name": "Zill",
        "main_role": "Jungle",
        "tier": "B",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Zill.webp",
        "win_rate": 50.3,
        "pick_rate": 4.5,
        "ban_rate": 4.4,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "zephys",
                "reason": "Zephys với nội tại tăng tỷ lệ miễn nhiễm sát thương theo lượng máu đã mất, là quá khó để môt combo của Zill có thể hạ gục được vị tướng này. Thêm nữa sát thương và độ cơ động từ Zephys thừa sức để đưa một con tướng máu giấy như Zill về chầu ông bà trong chớp mắt."
            },
            {
                "id": "aoi",
                "reason": "Với 2 cú đu dây và chiêu cuối không thể chọn làm mục tiêu, Aoi có thể vừa hóa giải đi chiêu cuối của Zill vừa truy sát nó một cách đơn giản. Với khả năng sốc sát thương nhỉnh hơn hẳn, Zill rõ ràng không phải là đối thủ của Aoi."
            },
            {
                "id": "boltbaron",
                "reason": "Bolt Baron có thể liên tục lướt để giữ khoảng cách đồng thời tạo giáp ảo sẽ khiến cho Zill cực kì khó để áp sát dồn dame, chưa kể nếu Zill dùng chiêu cuối thì Baron thì cần bay lên tránh né rồi hạ xuống phản công là Zill chết chắc."
            },
            {
                "id": "marja",
                "reason": "Zill mà gặp phải Marja là như con gặp mẹ, dồn dame thì Marja lặn xuống mất mục tiêu, muốn chạy cũng không đủ độ cơ động để thoát, muốn đánh mục tiêu khác thì bị hút hết sát thương, tóm lại là bó tay toàn tập."
            },
            {
                "id": "aleister",
                "reason": "Sát thủ nào cũng đều ngán Aleister vì chỉ cần bị vị tướng này khóa mõm cái là chết chắc và Zill cũng thế, thêm nữa tầm đánh của Zill có thể gọi là ngắn nên gần như hoàn toàn biến thành phế vật khi gặp phải Aleister."
            },
            {
                "id": "raz",
                "reason": "Một con tướng sát thủ như Zill cực sợ bị khống chế mà đó lại là thứ mà Raz có thừa, chỉ cần Raz lên một món kháng phép là Zill chắc chắn chỉ có ăn liên tục các cú đẩy lùi, đấm móc rồi đạp liên tục vào mồm mà không làm gì được."
            },
            {
                "id": "gildur",
                "reason": "Gildur là ông hoàng làm choáng, choáng dọc, choáng ngang, choáng xung quanh làm Zill toàn thân bất động, không múa may nổi. Nói chung chỉ cần Gildur đi cạnh bảo vệ chủ lực cũng đủ khiên Zill phế hơn rất nhiều."
            },
            {
                "id": "zip",
                "reason": "Khắc chế cứng hơn quả trứng của các thể loại sát thủ. Khi Zill nhảy vào, chỉ cần nuốt đồng đội vào là Zill mất luôn mục tiêu chính, mà Zill không quá cơ động để có thể vào rồi lại ra khỏi giao tranh an toàn nên rất dễ rơi vào thế khó."
            },
            {
                "id": "thane",
                "reason": "Rất trâu bò và có nhiều khống chế cứng, Thane sẽ khiến cho trận đấu của Zill trở thành ác mộng. Vị tướng này chỉ cần theo sát chủ lực hoặc dí theo khống chế Zill liên tục trong combat là ZIll khỏi chơi game luôn."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    },
    {
        "id": "zip",
        "name": "Zip",
        "main_role": "SP",
        "tier": "S",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Zip-100x100.webp",
        "win_rate": 54.2,
        "pick_rate": 10.4,
        "ban_rate": 24.4,
        "attributes": {
            "damage": 1,
            "tankiness": 5,
            "mobility": 2,
            "teamfight": 5,
            "split_push": 1
        },
        "counters": [
            {
                "id": "ata",
                "reason": "Sức mạnh của Zip chủ yếu đến từ chiêu cuối Lăn Long Lóc và Ata dễ dàng vô hiệu hóa điều đó bằng bức tường của mình. Khéo léo sử dụng chiêu 3 dựng thuyền để chặn đường lui hoặc ngăn chặn Zip tiếp cận bảo kê đồng đội của hắn."
            },
            {
                "id": "baldum",
                "reason": "Baldum dùng chiêu cuối “Địa giam” để cô lập Zip và đồng đội hắn, vô hiệu hóa khả năng bảo vệ và giải cứu của Zip. Chủ động sử dụng chiêu cuối vào lúc Zip chuẩn bị hút đồng đội hoặc lăn đi là nó sẽ phế hoàn toàn."
            },
            {
                "id": "thane",
                "reason": "Thane có rất nhiều khống chế nên rất phù hợp để quấy rối không cho Zip tiếp cận hỗ trợ đồng đội. Khi thấy Zip có dấu hiệu muốn hút đồng minh thì dùng kỹ năng hất tung và khống chế liên tục không cho nó được toại nguyện."
            },
            {
                "id": "ybneth",
                "reason": "Với khả năng làm chậm liên tục và đẩy lùi gây choáng, Y’bneth khiến Zip và đồng minh không thể tự do di chuyển. Dùng kỹ năng hợp lý để giữ chân và buộc Zip phải tách khỏi đồng đội của hắn."
            },
            {
                "id": "omen",
                "reason": "Omen sử dụng chiêu cuối “Sát vực” để trói Zip, ngăn nó dùng kỹ năng nuốt đồng đội. Hãy chủ động nhắm vào Zip khi nó chuẩn bị nuốt hoặc khi nó đang lăn đều được."
            },
            {
                "id": "maloch",
                "reason": "Khi Zip nhả đồng đội ra sẽ là cơ hội cực tốt cho Maloch dùng chiêu cuối hất tung tất cả cùng một lúc. Ngoài ra thì lượng dame chuẩn của vị tướng này cũng cực phù hợp để đục thủng lớp giáp dày của Zip."
            }
        ],
        "tags": [
            "sp",
            "crawled"
        ]
    },
    {
        "id": "zuka",
        "name": "Zuka",
        "main_role": "Jungle",
        "tier": "A",
        "avatar": "https://aov-builds.com/wp-content/uploads/2024/08/Zuka-100x100.webp",
        "win_rate": 68.2,
        "pick_rate": 7.7,
        "ban_rate": 0,
        "attributes": {
            "damage": 5,
            "tankiness": 2,
            "mobility": 5,
            "teamfight": 3,
            "split_push": 4
        },
        "counters": [
            {
                "id": "elandorr",
                "reason": "Mặc dù Zuka rất cơ động nhưng Eland’orr còn cơ động hơn kèm theo sải tay dài thì Zuka rất khó động được vào người vị tướng này, kể cả có áp sát được thì Zuka cũng không đủ sát thương dồn vào chưa kể hắn hoàn toàn có thể bị đẩy ra bởi chiêu cuối của Eland’orr."
            },
            {
                "id": "billow",
                "reason": "Hiện tại Billow là một vị tướng đi rừng hơn Zuka về mọi mặt như độ cơ động, khả năng sốc sát thương, khả năng hồi phục… cho nên sử dụng Billow để khắc chế Zuka là hoàn toàn hợp lý."
            },
            {
                "id": "boltbaron",
                "reason": "Nếu Zuka đi rừng còn đỡ chứ nếu đi solo top với Bolt Baron thì chỉ có ôm trụ, với tay ngắn và lượng sát thương đều đều Zuka rất khó lòng hạ gục được Bolt Baron nhưng ngược lại vị tướng này hoàn toàn đủ sát thương để dí theo rồi đưa Zuka lên bảng mà không gặp quá nhiều khó khăn."
            },
            {
                "id": "biron",
                "reason": "Lại thêm một tướng họ nhà B, Biron vừa chống chịu tốt vừa sốc sát thương rất nhanh kèm hiệu ứng thì việc khắc chế một con tướng cận chiến máu giấy như Zuka là hoàn toàn nằm trong khả năng."
            },
            {
                "id": "skud",
                "reason": "Riêng Skud thì độ trâu bò khỏi phải nói, cho Zuka vụt gẫy gậy cũng chưa chắc đã hạ gục được Skud, nhưng một đấm từ chiêu 1 của vị tướng này sẽ dễ dàng lấy được nửa cây máu của Zuka. Kèo này chỉ khiếm khuyết ở chỗ là khi Zuka muốn chạy thì Skud khó đuổi."
            },
            {
                "id": "aleister",
                "reason": "Một vị tướng chống chịu yếu và bắt buộc phải áp sát mới gây được sát thương như Zuka thì chắc chắn sẽ sợ Aleister."
            },
            {
                "id": "veera",
                "reason": "Trừ khi Zuka cầm Thanh Tẩy hay lên nhiều đồ kháng phép còn nếu không hắn ta sẽ rất nhanh lên bảng đếm số khi dính choáng và một combo đầy đủ từ Veera."
            },
            {
                "id": "raz",
                "reason": "Zuka rất ngán Raz vì mỗi khi lao vào hoặc không để ý là có thể bốc hơi ngay mà không thể lăn lộn kịp với combo siêu sát thương kèm sát thương của vị tướng pháp sư kiêm sát thủ này."
            },
            {
                "id": "arum",
                "reason": "Aleister phiên bản đi hỗ trợ, Arum cũng thừa đủ độ cứng cáp không sợ bị Zuka hạ gục, cộng thêm chiêu 3 áp chế cứng có thể biến khả năng lăn lộn của Zuka thành trò hề trong combat."
            },
            {
                "id": "omega",
                "reason": "Omega tuy ít người chơi nhưng vị tướng hỗ trợ này khắc chế những tướng áp sát như Zuka rất hiệu quả với khả năng tank và hiệu ứng choáng kèm đẩy ra liên tục từ chiêu cuối không cho hắn ta có cơ hội tấn công chủ lực."
            },
            {
                "id": "stuart",
                "reason": "Đây là một tướng xạ thủ có khả năng khắc chế được độ cơ động cao của Zuka với khả năng bật ngược về giữ khoảng cách từ chiêu 3 kèm miễn nhiễm sát thương vật lý từ chiêu 2."
            }
        ],
        "tags": [
            "jungle",
            "crawled"
        ]
    }
];

// --- 2. HARD COUNTERS DATABASE (counters_manual) ---
const COUNTERS_MANUAL = [
    { counter: "aleister", countered: "nakroth", reason: "Khống chế cứng (áp chế) chặn Nakroth bay nhảy" },
    { counter: "omen", countered: "florentino", reason: "Sát vực khóa Florentino, không cho nhặt hoa" },
    { counter: "hayate", countered: "thane", reason: "Sát thương chuẩn chí mạng bào tank cực mạnh" },
    { counter: "elsu", countered: "krixi", reason: "Cấu rỉa tầm siêu xa, Krixi kém cơ động khó né" },
    { counter: "grakk", countered: "elsu", reason: "Kéo bắt Elsu khi đang đứng ngắm bắn" },
    { counter: "zuka", countered: "violet", reason: "Sát thủ cơ động dồn sát thương dứt điểm AD" },
    { counter: "thane", countered: "zuka", reason: "Đẩy lùi ngắt combo chiêu thức lao vào của Zuka" },
    { counter: "tulen", countered: "yorn", reason: "Áp sát nhanh dồn sát thương lôi điểu dứt điểm Yorn" }
];

// --- 3. DRAFT SEQUENCE CONFIG (AoV Day Ranked Rules: Blue Team vs Red Team) ---
const TURN_SEQUENCE = [
    // --- Simultaneous Ban Phase (Sequential simulation in HUD) ---
    { type: "ban", team: "blue", slotIndex: 0, label: "Đội Xanh Cấm 1" },
    { type: "ban", team: "red", slotIndex: 0, label: "Đội Đỏ Cấm 1" },
    { type: "ban", team: "blue", slotIndex: 1, label: "Đội Xanh Cấm 2" },
    { type: "ban", team: "red", slotIndex: 1, label: "Đội Đỏ Cấm 2" },
    { type: "ban", team: "blue", slotIndex: 2, label: "Đội Xanh Cấm 3" },
    { type: "ban", team: "red", slotIndex: 2, label: "Đội Đỏ Cấm 3" },
    { type: "ban", team: "blue", slotIndex: 3, label: "Đội Xanh Cấm 4" },
    { type: "ban", team: "red", slotIndex: 3, label: "Đội Đỏ Cấm 4" },
    { type: "ban", team: "blue", slotIndex: 4, label: "Đội Xanh Cấm 5" },
    { type: "ban", team: "red", slotIndex: 4, label: "Đội Đỏ Cấm 5" },
    
    // --- Pick Phase (Staggered 1-2-2-2-2-1) ---
    { type: "pick", team: "blue", slotIndex: 0, label: "Đội Xanh Chọn 1" }, // Lượt 1: Xanh Pick 1
    { type: "pick", team: "red", slotIndex: 0, label: "Đội Đỏ Chọn 1" },  // Lượt 2: Đỏ Pick 1 & 2
    { type: "pick", team: "red", slotIndex: 1, label: "Đội Đỏ Chọn 2" },
    { type: "pick", team: "blue", slotIndex: 1, label: "Đội Xanh Chọn 2" }, // Lượt 3: Xanh Pick 2 & 3
    { type: "pick", team: "blue", slotIndex: 2, label: "Đội Xanh Chọn 3" },
    { type: "pick", team: "red", slotIndex: 2, label: "Đội Đỏ Chọn 3" },  // Lượt 4: Đỏ Pick 3 & 4
    { type: "pick", team: "red", slotIndex: 3, label: "Đội Đỏ Chọn 4" },
    { type: "pick", team: "blue", slotIndex: 3, label: "Đội Xanh Chọn 4" }, // Lượt 5: Xanh Pick 4 & 5
    { type: "pick", team: "blue", slotIndex: 4, label: "Đội Xanh Chọn 5" },
    { type: "pick", team: "red", slotIndex: 4, label: "Đội Đỏ Chọn 5" }   // Lượt 6: Đỏ Pick 5
];

// --- 4. APP STATE STATE MACHINE ---
let state = {
    currentTurnIndex: 0,
    bansBlue: [null, null, null, null, null],
    bansRed: [null, null, null, null, null],
    picksBlue: [null, null, null, null, null],
    picksRed: [null, null, null, null, null],
    
    // Filter & Search
    searchQuery: "",
    selectedRoleFilter: "all",
    selectedRecRoleFilter: "all",
    recommendationMode: "counter",
    heroSortOption: "name",
    skipBanPhase: localStorage.getItem("skipBanPhase") !== null ? localStorage.getItem("skipBanPhase") === "true" : true,
    
    // History for Undo
    history: []
};

// --- 5. SVG AVATAR GENERATION UTILITY ---
function generateSvgAvatar(name, role, tier) {
    let gradientStart = '#3b82f6';
    let gradientEnd = '#1d4ed8';
    let accentColor = '#60a5fa';
    
    if (tier === 'S+' || tier === 'S') {
        gradientStart = '#f59e0b';
        gradientEnd = '#b45309';
        accentColor = '#fcd34d';
    } else if (tier === 'A') {
        gradientStart = '#a855f7';
        gradientEnd = '#6b21a8';
        accentColor = '#d8b4fe';
    }
    
    let roleGlyph = '';
    if (role === 'Top') {
        roleGlyph = `<path d="M12 50l30-30 6 6-30 30z" fill="currentColor"/><path d="M42 20l4-4a2 2 0 0 1 3 0l3 3a2 2 0 0 1 0 3l-4 4z" fill="currentColor"/><circle cx="12" cy="50" r="4" fill="currentColor"/>`;
    } else if (role === 'Jungle') {
        roleGlyph = `<path d="M32 12l20 20-20 20-20-20z" stroke="currentColor" stroke-width="3" fill="none"/><circle cx="32" cy="32" r="6" fill="currentColor"/>`;
    } else if (role === 'Mid') {
        roleGlyph = `<circle cx="32" cy="32" r="10" stroke="currentColor" stroke-width="3" fill="none"/><path d="M32 10v10M32 44v10M10 32h10M44 32h10" stroke="currentColor" stroke-width="3"/>`;
    } else if (role === 'AD') {
        roleGlyph = `<path d="M16 16v32h32" stroke="currentColor" stroke-width="4" fill="none"/><path d="M16 48l24-24" stroke="currentColor" stroke-width="3"/><path d="M42 20l4 4-10 10" fill="currentColor"/>`;
    } else if (role === 'SP') {
        roleGlyph = `<path d="M32 12c-12 0-16 10-16 22 0 12 10 16 16 18 6-2 16-6 16-18 0-12-4-22-16-22z" stroke="currentColor" stroke-width="3" fill="none"/>`;
    }
    
    const initials = name.slice(0, 2).toUpperCase();
    
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%">
        <defs>
            <linearGradient id="grad-${name.replace(/\s+/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="${gradientStart}" />
                <stop offset="100%" stop-color="${gradientEnd}" />
            </linearGradient>
        </defs>
        <rect width="64" height="64" rx="10" fill="url(#grad-${name.replace(/\s+/g, '')})" />
        <rect x="2" y="2" width="60" height="60" rx="8" fill="none" stroke="${accentColor}" stroke-opacity="0.2" stroke-width="1" />
        <text x="32" y="36" font-family="'Outfit', sans-serif" font-size="19" font-weight="800" fill="#ffffff" fill-opacity="0.9" text-anchor="middle" dominant-baseline="middle">
            ${initials}
        </text>
        <g transform="scale(0.22) translate(76, 76)" color="#ffffff" stroke-linecap="round">
            ${roleGlyph}
        </g>
        <rect x="4" y="4" width="14" height="9" rx="2" fill="#0f172a" fill-opacity="0.6"/>
        <text x="11" y="10.5" font-family="'Outfit', sans-serif" font-size="7.5" font-weight="950" fill="${accentColor}" text-anchor="middle" dominant-baseline="middle">
            ${tier}
        </text>
    </svg>
    `;
    
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
}

// --- 6. SCORING LOGIC ENGINE ---
function calculateSuggestions(teamType = "blue") {
    // 1. Identify which roles our team already picked
    const pickedIds = teamType === "blue" ? state.picksBlue.filter(id => id !== null) : state.picksRed.filter(id => id !== null);
    const pickedHeroes = pickedIds.map(id => HERO_DATABASE.find(h => h.id === id)).filter(Boolean);
    const pickedRoles = pickedHeroes.map(h => h.main_role);
    
    // Determine missing roles
    const allRoles = ["Top", "Mid", "Jungle", "AD", "SP"];
    let missingRoles = allRoles.filter(role => !pickedRoles.includes(role));
    
    // Gather all banned/picked heroes to lock out candidates
    const unavailableHeroes = new Set([
        ...state.bansBlue.filter(Boolean),
        ...state.bansRed.filter(Boolean),
        ...state.picksBlue.filter(Boolean),
        ...state.picksRed.filter(Boolean)
    ]);
    
    // Candidates base pool: not banned/picked
    let candidates = HERO_DATABASE.filter(h => !unavailableHeroes.has(h.id));
    
    // Filter candidates by specifically selected recommendations role filter (if chosen)
    if (state.selectedRecRoleFilter !== "all") {
        candidates = candidates.filter(h => h.main_role === state.selectedRecRoleFilter);
    }
    
    // Get Enemy Team picked details
    const enemyPickedIds = teamType === "blue" ? state.picksRed.filter(id => id !== null) : state.picksBlue.filter(id => id !== null);
    const enemyPickedHeroes = enemyPickedIds.map(id => HERO_DATABASE.find(h => h.id === id)).filter(Boolean);
    
    // Calculate parameters for team comps
    const totalEnemyTankiness = enemyPickedHeroes.reduce((sum, h) => sum + h.attributes.tankiness, 0);
    const friendlyTeamfightAvailable = pickedHeroes.some(h => h.attributes.teamfight >= 4);
    
    const enemyHighMobility = enemyPickedHeroes.some(h => h.attributes.mobility >= 5);
    const enemyHighBurst = enemyPickedHeroes.some(h => h.attributes.damage >= 5 && h.main_role === "Mid");
    
    // Friendly team composition state
    const totalFriendlyTankiness = pickedHeroes.reduce((sum, h) => sum + h.attributes.tankiness, 0);
    const friendlyHasTF = pickedHeroes.some(h => h.attributes.teamfight >= 4);
    const friendlyHasBurst = pickedHeroes.some(h => h.attributes.damage >= 4);
    const friendlyHasMobility = pickedHeroes.some(h => h.attributes.mobility >= 4);
    
    const tankShredders = ["hayate", "lauriel", "maloch"];
    
    // 2. Score each candidate
    const scoredCandidates = candidates.map(hero => {
        let baseScore = 30; // Default
        let wrAdj = 0;
        
        if (state.recommendationMode === "meta") {
            if (hero.tier === 'S+') baseScore = 55;
            else if (hero.tier === 'S') baseScore = 50;
            else if (hero.tier === 'A') baseScore = 40;
            else if (hero.tier === 'B') baseScore = 30;
            else if (hero.tier === 'C') baseScore = 20;
            
            wrAdj = Math.round((hero.win_rate - 50.0) * 1.5);
        } else {
            // Counter Mode: Tier and Win rate have almost no influence
            if (hero.tier === 'S+') baseScore = 22;
            else if (hero.tier === 'S') baseScore = 21;
            else if (hero.tier === 'A') baseScore = 20;
            else if (hero.tier === 'B') baseScore = 19;
            else if (hero.tier === 'C') baseScore = 18;
            
            wrAdj = Math.round((hero.win_rate - 50.0) * 0.15);
        }
        
        let score = baseScore;
        const reasons = [];
        
        if (wrAdj !== 0) {
            score += wrAdj;
            reasons.push({ points: wrAdj, text: `Tỷ lệ thắng thực tế (${hero.win_rate.toFixed(1)}%)` });
        }
        
        // --- Flexible Lane Swapping (Bonus for correct lane) ---
        if (state.selectedRecRoleFilter === "all" && missingRoles.includes(hero.main_role)) {
            score += 5;
            reasons.push({ points: 5, text: `Phù hợp lane còn thiếu (${translateRole(hero.main_role)})` });
        }
        
        // --- Class Counter (Khắc chế Hệ) ---
        if (enemyPickedHeroes.length > 0) {
            if (totalEnemyTankiness >= 7) {
                if (tankShredders.includes(hero.id)) {
                    score += 15;
                    reasons.push({ points: 15, text: "Khắc chế Đội hình chống chịu cao (Sát thương chuẩn/Bào Tank)" });
                }
            }
            if (totalEnemyTankiness < 3) {
                if (hero.main_role === "Jungle" || hero.attributes.damage >= 4) {
                    score += 15;
                    reasons.push({ points: 15, text: "Săn mục tiêu Đội hình yếu máu đối phương (Sát thương lớn)" });
                }
            }
        }
        
        // --- Hard Counter & Counter Database Check ---
        enemyPickedHeroes.forEach(enemy => {
            const counterRule = COUNTERS_MANUAL.find(c => c.counter === hero.id && c.countered === enemy.id);
            if (counterRule) {
                score += 20;
                reasons.push({ points: 20, text: `Khắc chế cứng ${enemy.name} (${counterRule.reason})` });
            } else {
                const crawledCounter = enemy.counters && enemy.counters.find(c => c.id === hero.id);
                if (crawledCounter) {
                    score += 20;
                    reasons.push({ points: 20, text: `Khắc chế đối phương: ${hero.name} khắc chế ${enemy.name} (${crawledCounter.reason})` });
                }
            }
            
            const selfCountered = hero.counters && hero.counters.find(c => c.id === enemy.id);
            if (selfCountered) {
                score -= 15;
                reasons.push({ points: -15, text: `Bị khắc chế: ${hero.name} ngại gặp ${enemy.name} (${selfCountered.reason})` });
            }
        });
        
        // --- Block Pick / Anti-Counter (Cướp bài cản địch khắc chế đồng đội) ---
        pickedHeroes.forEach(friendly => {
            const blockCounter = friendly.counters && friendly.counters.find(c => c.id === hero.id);
            if (blockCounter) {
                // If the enemy team has already picked a hero for this candidate's main role, the block pick is nullified!
                const enemyHasFilledRole = enemyPickedHeroes.some(e => e.main_role === hero.main_role);
                if (!enemyHasFilledRole) {
                    score += 15;
                    reasons.push({ points: 15, text: `Cướp bài/Bảo vệ đồng đội: Chọn ${hero.name} chặn đối phương lấy để khắc chế ${friendly.name}` });
                }
            }
        });
        
        // --- Synergy (Hiệp lực) ---
        if (friendlyTeamfightAvailable && hero.attributes.teamfight >= 4) {
            score += 10;
            reasons.push({ points: 10, text: "Đồng đội giao tranh tổng mạnh (Hiệp lực TF ≥ 4)" });
        }
        
        // --- Team Composition Balancing (Cân đối đội hình) ---
        if (pickedHeroes.length > 0) {
            if (totalFriendlyTankiness <= 3 && hero.attributes.tankiness >= 4) {
                score += 15;
                reasons.push({ points: 15, text: "Cân đối đội hình: Bổ sung khả năng chống chịu/tiên phong (Tankiness ≥ 4)" });
            }
            if (!friendlyHasTF && hero.attributes.teamfight >= 4) {
                score += 15;
                reasons.push({ points: 15, text: "Cân đối đội hình: Bổ sung khống chế/hiệu ứng giao tranh (TF ≥ 4)" });
            }
            if (!friendlyHasBurst && hero.attributes.damage >= 4) {
                score += 15;
                reasons.push({ points: 15, text: "Cân đối đội hình: Bổ sung nguồn sát thương dứt điểm (Damage ≥ 4)" });
            }
            if (!friendlyHasMobility && hero.attributes.mobility >= 4) {
                score += 15;
                reasons.push({ points: 15, text: "Cân đối đội hình: Bổ sung tính cơ động/áp sát (Cơ động ≥ 4)" });
            }
        }
        
        // --- Composition Structural Balance (Bù đắp cơ cấu) ---
        const hasMid = pickedHeroes.some(h => h.main_role === "Mid");
        const hasAD = pickedHeroes.some(h => h.main_role === "AD");
        const hasFrontline = pickedHeroes.some(h => (h.main_role === "SP" || h.main_role === "Top") && h.attributes.tankiness >= 4);
        
        if (!hasMid && hero.main_role === "Mid") {
            score += 15;
            reasons.push({ points: 15, text: "Bổ sung nguồn Sát thương Phép chính cho đội (Pháp Sư)" });
        }
        if (!hasAD && hero.main_role === "AD") {
            score += 15;
            reasons.push({ points: 15, text: "Bổ sung nguồn Sát thương Vật lý chủ lực (Xạ Thủ)" });
        }
        if (!hasFrontline && hero.attributes.tankiness >= 4 && (hero.main_role === "SP" || hero.main_role === "Top")) {
            score += 15;
            reasons.push({ points: 15, text: "Bổ sung tướng Đỡ đòn / Tiên phong chống chịu gánh chịu sát thương" });
        }
        
        // --- Dynamic Counter-Drafting (Khắc chế động) ---
        if (enemyHighMobility && hero.attributes.teamfight >= 4 && (hero.main_role === "SP" || hero.main_role === "Mid")) {
            score += 15;
            reasons.push({ points: 15, text: "Khống chế/Giao tranh mạnh chống càn quét vs Tướng cơ động địch" });
        }
        if (enemyHighBurst && hero.main_role === "SP" && hero.attributes.tankiness >= 4) {
            score += 15;
            reasons.push({ points: 15, text: "Đỡ đòn bảo kê giảm sát thương từ nguồn sốc dame phép của địch" });
        }
        if (hero.ban_rate >= 15.0) {
            score += 10;
            reasons.push({ points: 10, text: "Tranh bài: Tướng Hot Meta cạnh tranh cao (Ban rate ≥ 15%)" });
        }
        
        return {
            hero,
            totalScore: score,
            baseScore,
            reasons
        };
    });
    
    // 3. Sort by totalScore desc
    scoredCandidates.sort((a, b) => b.totalScore - a.totalScore);
    
    return {
        topSuggestions: scoredCandidates.slice(0, 6),
        missingRoles: missingRoles
    };
}

// --- 7. RENDER USER INTERFACE ---
function renderUI() {
    const isBanPhase = state.currentTurnIndex < 10;
    const currentTurn = state.currentTurnIndex < 20 ? TURN_SEQUENCE[state.currentTurnIndex] : null;
    
    // Sync sort dropdown value
    const sortSelect = document.getElementById("sort-select");
    if (sortSelect) {
        sortSelect.value = state.heroSortOption;
    }

    // --- 1. Active Status Bar ---
    const phaseBadge = document.getElementById("current-phase");
    const statusText = document.getElementById("status-text");
    
    if (state.currentTurnIndex >= 20) {
        phaseBadge.textContent = "HOÀN TẤT";
        phaseBadge.className = "phase-badge";
        statusText.textContent = "Cấm chọn hoàn thành! Bấm Reset để chơi lại.";
        document.getElementById("btn-undo").disabled = false;
        showCompletionOverlay();
    } else {
        document.getElementById("btn-undo").disabled = state.history.length === 0;
        
        if (isBanPhase) {
            phaseBadge.textContent = "GIAI ĐOẠN CẤM";
            phaseBadge.className = "phase-badge ban-phase";
        } else {
            phaseBadge.textContent = "GIAI ĐOẠN CHỌN";
            phaseBadge.className = "phase-badge pick-phase";
        }
        
        const activeTeamName = currentTurn.team === "blue" ? "ĐỘI XANH" : "ĐỘI ĐỎ";
        const actionType = currentTurn.type === "ban" ? "CẤM" : "CHỌN";
        statusText.textContent = `Lượt ${state.currentTurnIndex + 1}/20: [${activeTeamName}] đang ${actionType}...`;
    }
    
    // --- 2. Update Column Focus Styling ---
    const blueCol = document.getElementById("blue-column");
    const redCol = document.getElementById("red-column");
    
    blueCol.classList.remove("active-team-turn");
    redCol.classList.remove("active-team-turn");
    
    if (currentTurn) {
        if (currentTurn.team === "blue") {
            blueCol.classList.add("active-team-turn");
        } else {
            redCol.classList.add("active-team-turn");
        }
    }
    
    // --- 3. Render Ban Slots (Blue Left & Red Right) ---
    renderBanRow(state.bansBlue, "ban-slots-blue", "blue-ban-slot");
    renderBanRow(state.bansRed, "ban-slots-red", "red-ban-slot");
    
    // --- 4. Render Pick Slots (Blue Left & Red Right) ---
    renderPickCol(state.picksBlue, "pick-slots-blue", "blue-pick-slot", "blue");
    renderPickCol(state.picksRed, "pick-slots-red", "red-pick-slot", "red");
    
    // --- 5. Render Hero Grid ---
    renderHeroGrid();
    
    // --- 6. Render Recommendations & Stats ---
    renderRecommendationsAndStats();
}

// Render Ban Row Helpers
function renderBanRow(bansArray, containerId, slotClass) {
    const container = document.getElementById(containerId);
    const slots = container.querySelectorAll(`.${slotClass}`);
    
    slots.forEach((slot, idx) => {
        slot.innerHTML = "";
        slot.className = `ban-slot ${slotClass}`;
        
        // Highlight active ban slot
        const isCurrentActive = state.currentTurnIndex < 10 && 
                                TURN_SEQUENCE[state.currentTurnIndex].type === "ban" &&
                                TURN_SEQUENCE[state.currentTurnIndex].slotIndex === idx &&
                                ((TURN_SEQUENCE[state.currentTurnIndex].team === "blue" && slotClass.includes("blue")) ||
                                 (TURN_SEQUENCE[state.currentTurnIndex].team === "red" && slotClass.includes("red")));
        
        if (isCurrentActive) {
            slot.classList.add("active-slot-highlight");
        }
        
        const heroId = bansArray[idx];
        if (heroId) {
            slot.classList.add("filled");
            const hero = HERO_DATABASE.find(h => h.id === heroId);
            if (hero) {
                const img = document.createElement("img");
                img.src = hero.avatar || generateSvgAvatar(hero.name, hero.main_role, hero.tier);
                img.alt = hero.name;
                slot.appendChild(img);
                
                const slash = document.createElement("div");
                slash.className = "ban-slot-overlay-slash";
                slot.appendChild(slash);
            }
        }
    });
}

// Render Pick Column Helpers
function renderPickCol(picksArray, containerId, slotClass, teamType) {
    const container = document.getElementById(containerId);
    const slots = container.querySelectorAll(`.${slotClass}`);
    
    slots.forEach((slot, idx) => {
        slot.innerHTML = "";
        slot.className = `pick-slot ${slotClass}`;
        
        // Highlight active pick slot
        const isCurrentActive = state.currentTurnIndex >= 10 && state.currentTurnIndex < 20 &&
                                TURN_SEQUENCE[state.currentTurnIndex].type === "pick" &&
                                TURN_SEQUENCE[state.currentTurnIndex].slotIndex === idx &&
                                ((TURN_SEQUENCE[state.currentTurnIndex].team === "blue" && teamType === "blue") ||
                                 (TURN_SEQUENCE[state.currentTurnIndex].team === "red" && teamType === "red"));
        
        if (isCurrentActive) {
            slot.classList.add("active-slot-highlight");
        }
        
        const heroId = picksArray[idx];
        if (heroId) {
            const hero = HERO_DATABASE.find(h => h.id === heroId);
            if (hero) {
                slot.classList.add("filled");
                
                // Avatar Card
                const avatarDiv = document.createElement("div");
                avatarDiv.className = "pick-card-img";
                const img = document.createElement("img");
                img.src = hero.avatar || generateSvgAvatar(hero.name, hero.main_role, hero.tier);
                img.alt = hero.name;
                avatarDiv.appendChild(img);
                slot.appendChild(avatarDiv);
                
                // Info block
                const infoDiv = document.createElement("div");
                infoDiv.className = "pick-card-info";
                
                const nameHeader = document.createElement("h4");
                nameHeader.textContent = hero.name;
                infoDiv.appendChild(nameHeader);
                
                const metaDiv = document.createElement("div");
                metaDiv.className = "pick-card-meta";
                
                const tierBadge = document.createElement("span");
                const sanitizedTier = hero.tier.replace('+', 'Plus');
                tierBadge.className = `pick-card-tier tier-${sanitizedTier}`;
                tierBadge.textContent = `Tier ${hero.tier}`;
                metaDiv.appendChild(tierBadge);
                
                const wrBadge = document.createElement("span");
                wrBadge.className = "pick-card-wr";
                wrBadge.textContent = `WR: ${hero.win_rate.toFixed(1)}%`;
                metaDiv.appendChild(wrBadge);
                
                infoDiv.appendChild(metaDiv);
                slot.appendChild(infoDiv);
                
                // Mini Stats block
                const miniStatsDiv = document.createElement("div");
                miniStatsDiv.className = "pick-mini-stats";
                
                miniStatsDiv.appendChild(createMiniStatBar("Dmg", hero.attributes.damage, teamType));
                miniStatsDiv.appendChild(createMiniStatBar("Tank", hero.attributes.tankiness, teamType));
                miniStatsDiv.appendChild(createMiniStatBar("TF", hero.attributes.teamfight, teamType));
                
                slot.appendChild(miniStatsDiv);
            }
        } else {
            // Placeholder slot
            const placeholder = document.createElement("div");
            placeholder.className = "pick-placeholder-content";
            
            const num = idx + 1;
            placeholder.innerHTML = `Lượt Chọn ${num} <span>${isCurrentActive ? "Đang Chọn..." : "Trống"}</span>`;
            slot.appendChild(placeholder);
        }
    });
}

function createMiniStatBar(label, val, teamType) {
    const container = document.createElement("div");
    container.className = "mini-stat-bar";
    
    const labelSpan = document.createElement("span");
    labelSpan.textContent = `${label}: ${val}`;
    container.appendChild(labelSpan);
    
    const track = document.createElement("div");
    track.className = "mini-stat-track";
    
    const fill = document.createElement("div");
    fill.className = "mini-stat-fill";
    fill.style.width = `${(val / 5) * 100}%`;
    
    track.appendChild(fill);
    container.appendChild(track);
    return container;
}

function translateRole(role) {
    switch (role) {
        case "Top": return "Top";
        case "Jungle": return "Jg";
        case "Mid": return "Mid";
        case "AD": return "AD";
        case "SP": return "SP";
        default: return role;
    }
}

// Render Hero Grid
function renderHeroGrid() {
    const grid = document.getElementById("hero-grid");
    grid.innerHTML = "";
    
    // Assemble all unavailable IDs (banned or picked)
    const unavailableHeroes = new Set([
        ...state.bansBlue.filter(Boolean),
        ...state.bansRed.filter(Boolean),
        ...state.picksBlue.filter(Boolean),
        ...state.picksRed.filter(Boolean)
    ]);
    
    // Sort database: unpicked first, then by chosen sort option
    const sortedHeroes = [...HERO_DATABASE].sort((a, b) => {
        const aUn = unavailableHeroes.has(a.id) ? 1 : 0;
        const bUn = unavailableHeroes.has(b.id) ? 1 : 0;
        if (aUn !== bUn) return aUn - bUn;
        
        if (state.heroSortOption === "tier") {
            const tierWeight = { "S+": 5, "S": 4, "A": 3, "B": 2, "C": 1 };
            const aTier = tierWeight[a.tier] || 0;
            const bTier = tierWeight[b.tier] || 0;
            if (bTier !== aTier) return bTier - aTier;
            return a.name.localeCompare(b.name);
        } else if (state.heroSortOption === "win_rate") {
            if (b.win_rate !== a.win_rate) return b.win_rate - a.win_rate;
            return a.name.localeCompare(b.name);
        } else if (state.heroSortOption === "pick_rate") {
            if (b.pick_rate !== a.pick_rate) return b.pick_rate - a.pick_rate;
            return a.name.localeCompare(b.name);
        } else if (state.heroSortOption === "ban_rate") {
            if (b.ban_rate !== a.ban_rate) return b.ban_rate - a.ban_rate;
            return a.name.localeCompare(b.name);
        }
        
        return a.name.localeCompare(b.name);
    });
    
    sortedHeroes.forEach(hero => {
        // Apply filters
        const matchesQuery = hero.name.toLowerCase().includes(state.searchQuery.toLowerCase());
        const matchesRole = state.selectedRoleFilter === "all" || hero.main_role === state.selectedRoleFilter;
        
        if (!matchesQuery || !matchesRole) return;
        
        const card = document.createElement("div");
        card.className = "hero-card";
        card.dataset.id = hero.id;
        
        const isUnavailable = unavailableHeroes.has(hero.id);
        if (isUnavailable) {
            card.classList.add("disabled");
        } else {
            card.addEventListener("click", () => handleHeroSelect(hero));
        }
        
        const avatarDiv = document.createElement("div");
        avatarDiv.className = "hero-card-img";
        const img = document.createElement("img");
        img.src = hero.avatar || generateSvgAvatar(hero.name, hero.main_role, hero.tier);
        img.alt = hero.name;
        avatarDiv.appendChild(img);
        card.appendChild(avatarDiv);
        
        const nameHeader = document.createElement("h5");
        nameHeader.textContent = hero.name;
        card.appendChild(nameHeader);
        
        const statsSpan = document.createElement("span");
        statsSpan.className = "hero-card-stats";
        statsSpan.textContent = `WR: ${hero.win_rate.toFixed(1)}%`;
        card.appendChild(statsSpan);
        
        const tierBadge = document.createElement("span");
        const sanitizedTier = hero.tier.replace('+', 'Plus');
        tierBadge.className = `hero-card-badge tier-${sanitizedTier}`;
        tierBadge.textContent = hero.tier;
        card.appendChild(tierBadge);
        
        grid.appendChild(card);
    });
}

// Render Recommendations & Stats Panel
function renderRecommendationsAndStats() {
    const recList = document.getElementById("recommendation-list");
    recList.innerHTML = "";
    
    const missingRolesText = document.getElementById("missing-roles-text");
    const recTitle = document.getElementById("recommendation-title");
    
    const isPickPhase = state.currentTurnIndex >= 10 && state.currentTurnIndex < 20;
    const activeTeam = isPickPhase ? TURN_SEQUENCE[state.currentTurnIndex].team : "blue";
    
    // Update Title depending on active team
    if (activeTeam === "blue") {
        recTitle.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles magic-icon"></i> GỢI Ý TƯỚNG TỐI ƯU (ĐỘI XANH)`;
    } else {
        recTitle.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles magic-icon"></i> GỢI Ý TƯỚNG TỐI ƯU (ĐỘI ĐỎ)`;
    }
    
    // Update active class on recommendations filter tabs
    const recTabs = document.querySelectorAll("#rec-role-filters .rec-filter-tab");
    recTabs.forEach(tab => {
        if (tab.dataset.role === state.selectedRecRoleFilter) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    // Update active class on recommendation mode buttons
    const modeBtns = document.querySelectorAll("#rec-modes .mode-btn");
    modeBtns.forEach(btn => {
        if (btn.dataset.mode === state.recommendationMode) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Get recommendations for active team
    const { topSuggestions, missingRoles } = calculateSuggestions(activeTeam);
    
    const teamFull = activeTeam === "blue" ? state.picksBlue.filter(Boolean).length === 5 : state.picksRed.filter(Boolean).length === 5;
    
    // Format missing roles text
    if (state.currentTurnIndex < 10) {
        missingRolesText.textContent = "Giai đoạn Cấm (Gợi ý chưa mở)";
    } else if (teamFull) {
        missingRolesText.textContent = "Đội hình hoàn tất!";
    } else {
        missingRolesText.textContent = "Vị trí thiếu: " + missingRoles.map(translateRole).join(", ");
    }
    
    const isBluePickTurn = isPickPhase && TURN_SEQUENCE[state.currentTurnIndex].team === "blue";
    const isRedPickTurn = isPickPhase && TURN_SEQUENCE[state.currentTurnIndex].team === "red";
    
    if (!isPickPhase || teamFull) {
        const emptyState = document.createElement("div");
        emptyState.className = "rec-empty-state";
        if (teamFull) {
            emptyState.innerHTML = `<i class="fa-solid fa-circle-check"></i> Đội hình ${activeTeam === "blue" ? "Đội Xanh" : "Đội Đỏ"} đã chọn đầy đủ 5 vị trí.`;
        } else {
            emptyState.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Gợi ý sẽ tự động tính toán khi bước vào lượt Chọn (Pick) của một trong hai đội.`;
        }
        recList.appendChild(emptyState);
    } else {
        if (topSuggestions.length === 0) {
            const emptyState = document.createElement("div");
            emptyState.className = "rec-empty-state";
            emptyState.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Không tìm thấy tướng phù hợp còn trống trong bể tướng.`;
            recList.appendChild(emptyState);
        } else {
            topSuggestions.forEach(({ hero, totalScore, baseScore, reasons }) => {
                const card = document.createElement("div");
                card.className = "rec-card";
                
                const scoreBadge = document.createElement("div");
                scoreBadge.className = "rec-card-score";
                scoreBadge.textContent = `${totalScore}đ`;
                card.appendChild(scoreBadge);
                
                const heroInfo = document.createElement("div");
                heroInfo.className = "rec-card-hero-info";
                
                const avatar = document.createElement("div");
                avatar.className = "rec-card-avatar";
                const img = document.createElement("img");
                img.src = hero.avatar || generateSvgAvatar(hero.name, hero.main_role, hero.tier);
                img.alt = hero.name;
                avatar.appendChild(img);
                heroInfo.appendChild(avatar);
                
                const details = document.createElement("div");
                details.className = "rec-hero-details";
                const title = document.createElement("h4");
                title.textContent = hero.name;
                details.appendChild(title);
                
                const subtitle = document.createElement("span");
                subtitle.textContent = `${translateRole(hero.main_role)} • WR: ${hero.win_rate.toFixed(1)}% • Gốc: ${baseScore}đ`;
                details.appendChild(subtitle);
                
                heroInfo.appendChild(details);
                card.appendChild(heroInfo);
                
                // Reasons breakdown
                const reasonDiv = document.createElement("div");
                reasonDiv.className = "rec-card-reason";
                
                if (reasons.length === 0) {
                    reasonDiv.textContent = "Không có điểm cộng thêm đặc biệt. Đề xuất dựa trên Tier gốc.";
                } else {
                    const ul = document.createElement("ul");
                    reasons.forEach(r => {
                        const li = document.createElement("li");
                        const prefix = r.points > 0 ? `+${r.points}đ` : `${r.points}đ`;
                        li.textContent = `${prefix}: ${r.text}`;
                        if (r.points < 0) {
                            li.style.color = "var(--red-primary)";
                        }
                        ul.appendChild(li);
                    });
                    reasonDiv.appendChild(ul);
                }
                card.appendChild(reasonDiv);
                
                // Select button
                const selectBtn = document.createElement("button");
                selectBtn.className = "btn-rec-select";
                selectBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Chọn`;
                // Disable quick select if it is not the active pick turn
                const canSelect = (activeTeam === "blue" && isBluePickTurn) || (activeTeam === "red" && isRedPickTurn);
                if (!canSelect) {
                    selectBtn.disabled = true;
                    selectBtn.style.opacity = 0.5;
                    selectBtn.style.cursor = "not-allowed";
                } else {
                    selectBtn.addEventListener("click", () => handleHeroSelect(hero));
                }
                card.appendChild(selectBtn);
                
                recList.appendChild(card);
            });
        }
    }
    
    // --- 7. Calculate and Render Compositions Stats ---
    renderCompositionStats();
}

// Composition calculations
function renderCompositionStats() {
    const bluePickedIds = state.picksBlue.filter(Boolean);
    const redPickedIds = state.picksRed.filter(Boolean);
    
    const bluePicked = bluePickedIds.map(id => HERO_DATABASE.find(h => h.id === id)).filter(Boolean);
    const redPicked = redPickedIds.map(id => HERO_DATABASE.find(h => h.id === id)).filter(Boolean);
    
    // 1. Overall Team Scores
    let blueScore = 0;
    let redScore = 0;
    let bluePct = 0;
    let redPct = 0;
    
    // Average ratings
    let blueDmgAvg = 0, blueTankAvg = 0, blueTfAvg = 0;
    let redDmgAvg = 0, redTankAvg = 0, redTfAvg = 0;
    
    if (bluePicked.length > 0) {
        blueDmgAvg = bluePicked.reduce((s, h) => s + h.attributes.damage, 0) / bluePicked.length;
        blueTankAvg = bluePicked.reduce((s, h) => s + h.attributes.tankiness, 0) / bluePicked.length;
        blueTfAvg = bluePicked.reduce((s, h) => s + h.attributes.teamfight, 0) / bluePicked.length;
        
        blueScore = (blueDmgAvg + blueTankAvg + blueTfAvg) / 3;
        bluePct = (blueScore / 5) * 100;
    }
    
    if (redPicked.length > 0) {
        redDmgAvg = redPicked.reduce((s, h) => s + h.attributes.damage, 0) / redPicked.length;
        redTankAvg = redPicked.reduce((s, h) => s + h.attributes.tankiness, 0) / redPicked.length;
        redTfAvg = redPicked.reduce((s, h) => s + h.attributes.teamfight, 0) / redPicked.length;
        
        redScore = (redDmgAvg + redTankAvg + redTfAvg) / 3;
        redPct = (redScore / 5) * 100;
    }
    
    // Update HTML texts & bars (Blue Left, Red Right)
    const blueScoreEl = document.getElementById("blue-score-text");
    if (!blueScoreEl) return;
    
    blueScoreEl.textContent = `${blueScore.toFixed(1)}/5.0 (${Math.round(bluePct)}%)`;
    document.getElementById("blue-progress-bar").style.width = `${bluePct}%`;
    
    document.getElementById("red-score-text").textContent = `${redScore.toFixed(1)}/5.0 (${Math.round(redPct)}%)`;
    document.getElementById("red-progress-bar").style.width = `${redPct}%`;
    
    // Update Sub stats bars (Left for blue, Right for red)
    document.getElementById("sub-bar-dmg-blue").style.width = `${(blueDmgAvg / 5) * 100}%`;
    document.getElementById("sub-bar-dmg-red").style.width = `${(redDmgAvg / 5) * 100}%`;
    
    document.getElementById("sub-bar-tank-blue").style.width = `${(blueTankAvg / 5) * 100}%`;
    document.getElementById("sub-bar-tank-red").style.width = `${(redTankAvg / 5) * 100}%`;
    
    document.getElementById("sub-bar-tf-blue").style.width = `${(blueTfAvg / 5) * 100}%`;
    document.getElementById("sub-bar-tf-red").style.width = `${(redTfAvg / 5) * 100}%`;
}

// --- 8. ACTION HANDLERS ---

function handleHeroSelect(hero) {
    if (state.currentTurnIndex >= 20) return;
    
    // Save to history snapshot
    state.history.push({
        currentTurnIndex: state.currentTurnIndex,
        bansBlue: [...state.bansBlue],
        bansRed: [...state.bansRed],
        picksBlue: [...state.picksBlue],
        picksRed: [...state.picksRed]
    });
    
    const turn = TURN_SEQUENCE[state.currentTurnIndex];
    
    if (turn.type === "ban") {
        if (turn.team === "blue") {
            state.bansBlue[turn.slotIndex] = hero.id;
        } else {
            state.bansRed[turn.slotIndex] = hero.id;
        }
    } else {
        if (turn.team === "blue") {
            state.picksBlue[turn.slotIndex] = hero.id;
        } else {
            state.picksRed[turn.slotIndex] = hero.id;
        }
    }
    
    // Clear search query after pick
    state.searchQuery = "";
    state.selectedRecRoleFilter = "all";
    document.getElementById("search-input").value = "";
    document.getElementById("clear-search-btn").style.display = "none";
    
    // Advance State Turn
    state.currentTurnIndex++;
    
    renderUI();
}

function handleUndo() {
    if (state.history.length === 0) return;
    
    const prev = state.history.pop();
    
    state.currentTurnIndex = prev.currentTurnIndex;
    state.bansBlue = prev.bansBlue;
    state.bansRed = prev.bansRed;
    state.picksBlue = prev.picksBlue;
    state.picksRed = prev.picksRed;
    
    state.selectedRecRoleFilter = "all";
    // Hide overlay if shown
    hideCompletionOverlay();
    
    renderUI();
}

function handleReset() {
    state.currentTurnIndex = state.skipBanPhase ? 10 : 0;
    state.bansBlue = [null, null, null, null, null];
    state.bansRed = [null, null, null, null, null];
    state.picksBlue = [null, null, null, null, null];
    state.picksRed = [null, null, null, null, null];
    state.history = [];
    state.searchQuery = "";
    state.selectedRoleFilter = "all";
    state.selectedRecRoleFilter = "all";
    state.recommendationMode = "counter";
    state.heroSortOption = "name";
    
    document.getElementById("search-input").value = "";
    document.getElementById("clear-search-btn").style.display = "none";
    
    const filterTabs = document.querySelectorAll(".filter-tab");
    filterTabs.forEach(t => t.classList.remove("active"));
    document.getElementById("btn-filter-all").classList.add("active");
    
    // Hide overlays
    hideCompletionOverlay();
    
    renderUI();
}

// --- Theme Management System ---
function initTheme() {
    const themeToggleGroup = document.getElementById("theme-toggle-group");
    if (!themeToggleGroup) return;

    // Listen to theme toggle buttons clicks
    themeToggleGroup.addEventListener("click", (e) => {
        const btn = e.target.closest(".theme-btn");
        if (!btn) return;
        const selectedTheme = btn.dataset.themeVal;
        setThemeSetting(selectedTheme);
    });

    // Listen to system prefers-color-scheme changes
    const systemMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    try {
        systemMediaQuery.addEventListener("change", (e) => {
            const currentSetting = localStorage.getItem("theme") || "system";
            if (currentSetting === "system") {
                applyThemeResolved("system");
            }
        });
    } catch (err) {
        // Fallback for older browsers
        systemMediaQuery.addListener((e) => {
            const currentSetting = localStorage.getItem("theme") || "system";
            if (currentSetting === "system") {
                applyThemeResolved("system");
            }
        });
    }

    // Initial toggle UI update
    const savedSetting = localStorage.getItem("theme") || "system";
    updateThemeToggleUI(savedSetting);
}

function setThemeSetting(themeSetting) {
    localStorage.setItem("theme", themeSetting);
    applyThemeResolved(themeSetting);
    updateThemeToggleUI(themeSetting);
}

function applyThemeResolved(themeSetting) {
    let isDark = false;
    if (themeSetting === "dark") {
        isDark = true;
    } else if (themeSetting === "light") {
        isDark = false;
    } else {
        // system
        isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme-setting", themeSetting);
}

function updateThemeToggleUI(themeSetting) {
    const themeButtons = document.querySelectorAll("#theme-toggle-group .theme-btn");
    themeButtons.forEach(btn => {
        if (btn.dataset.themeVal === themeSetting) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

// --- 8. POST-DRAFT ANALYSIS ENGINE ---
function getTeamStats(pickedIds) {
    const heroes = pickedIds.map(id => HERO_DATABASE.find(h => h.id === id)).filter(Boolean);
    if (heroes.length === 0) return { damage: 0, tankiness: 0, mobility: 0, teamfight: 0, split_push: 0 };
    
    let total = { damage: 0, tankiness: 0, mobility: 0, teamfight: 0, split_push: 0 };
    heroes.forEach(h => {
        total.damage += h.attributes.damage;
        total.tankiness += h.attributes.tankiness;
        total.mobility += h.attributes.mobility;
        total.teamfight += h.attributes.teamfight;
        total.split_push += h.attributes.split_push;
    });
    
    const len = heroes.length;
    return {
        damage: (total.damage / len).toFixed(1),
        tankiness: (total.tankiness / len).toFixed(1),
        mobility: (total.mobility / len).toFixed(1),
        teamfight: (total.teamfight / len).toFixed(1),
        split_push: (total.split_push / len).toFixed(1)
    };
}

function getTactics(stats) {
    const dmg = parseFloat(stats.damage);
    const tnk = parseFloat(stats.tankiness);
    const mob = parseFloat(stats.mobility);
    const tf = parseFloat(stats.teamfight);
    const sp = parseFloat(stats.split_push);
    
    if (tnk >= 3.2 && tf >= 3.2) {
        return {
            title: "Giao tranh tổng & Bảo kê chủ lực",
            desc: "Đội hình sở hữu lượng chống chịu và hiệu ứng khống chế diện rộng dồi dào. Nên chủ động tổ chức các pha giao tranh tổng ở hang Rồng/Tà Thần, giữ cự ly đội hình để dàn chắn phía trước bảo kê tối đa cho xạ thủ/pháp sư phía sau xả sát thương."
        };
    }
    if (mob >= 3.2 && dmg >= 3.2) {
        return {
            title: "Bắt lẻ & Kéo giãn đội hình",
            desc: "Đội hình có độ cơ động rất cao và sát thương bùng nổ mạnh. Tránh giao tranh trực diện 5v5 khi chưa kéo máu đối phương. Hãy ưu tiên đẩy đường nhanh, rình rập trong bụi cỏ để bắt lẻ các mục tiêu đi lạc nhờ tốc độ tiếp cận nhanh chóng."
        };
    }
    if (sp >= 3.2) {
        return {
            title: "Đẩy lẻ & Kiểm soát mục tiêu",
            desc: "Có các quân bài đẩy lẻ mạnh mẽ. Nên phân chia đội hình theo dạng 4-1 hoặc 1-3-1, tận dụng khả năng solo đường mạnh để tạo áp lực trụ đối phương, ép đối thủ phải chia người đối phó rồi ăn các mục tiêu lớn."
        };
    }
    return {
        title: "Đội hình cân bằng tiêu chuẩn",
        desc: "Đội hình có sự cân bằng giữa sát thương và chống chịu. Vận hành theo trục Rừng - Mid - SP để kiểm soát sông và hỗ trợ hai đường cánh. Hãy giao tranh quanh các mục tiêu lớn khi đã thiết lập đầy đủ tầm nhìn."
    };
}

function getLaneNotes(picksSelf, picksEnemy) {
    const notes = [];
    const heroesSelf = picksSelf.map(id => HERO_DATABASE.find(h => h.id === id)).filter(Boolean);
    
    heroesSelf.forEach(hero => {
        const selfCountered = hero.counters && hero.counters.find(c => picksEnemy.includes(c.id));
        const enemyHeroes = picksEnemy.map(id => HERO_DATABASE.find(h => h.id === id)).filter(Boolean);
        let countersSomeone = null;
        for (let enemy of enemyHeroes) {
            if (enemy.counters && enemy.counters.some(c => c.id === hero.id)) {
                countersSomeone = enemy;
                break;
            }
        }
        
        let noteText = "";
        if (selfCountered) {
            const counterHero = HERO_DATABASE.find(h => h.id === selfCountered.id);
            noteText = `<strong>[${translateRole(hero.main_role)}] ${hero.name}</strong>: Bị khắc chế bởi ${counterHero.name}. Cần lùi sâu giữ vị trí trong combat, tránh solo đường.`;
        } else if (countersSomeone) {
            noteText = `<strong>[${translateRole(hero.main_role)}] ${hero.name}</strong>: Khắc chế cứng ${countersSomeone.name}. Chủ động áp sát đè đường và nhắm gank mục tiêu này.`;
        } else {
            switch (hero.main_role) {
                case "Mid":
                    noteText = `<strong>[Mid] ${hero.name}</strong>: Dọn lính nhanh, di chuyển sông kiểm soát tầm nhìn và đảo gank hai cánh.`;
                    break;
                case "Jungle":
                    noteText = `<strong>[Rừng] ${hero.name}</strong>: Đảm bảo tiến độ farm, ăn mục tiêu lớn và tổ chức gank đường cánh.`;
                    break;
                case "AD":
                    noteText = `<strong>[AD] ${hero.name}</strong>: Farm an toàn đầu trận, giữ vị trí sau lưng đấu sĩ/đỡ đòn xả sát thương.`;
                    break;
                case "SP":
                    noteText = `<strong>[SP] ${hero.name}</strong>: Kiểm soát bụi cỏ lấy tầm nhìn, bảo kê xạ thủ và mở giao tranh.`;
                    break;
                case "Top":
                    noteText = `<strong>[Top] ${hero.name}</strong>: Tập trung đẩy lính đường cánh ép trụ, sẵn sàng di chuyển hỗ trợ đồng đội.`;
                    break;
                default:
                    noteText = `<strong>[${translateRole(hero.main_role)}] ${hero.name}</strong>: Phối hợp cùng đồng đội và phát huy tối đa chất tướng.`;
            }
        }
        notes.push(noteText);
    });
    return notes;
}

function getMatchupWarnings(picksA, picksB, teamAName, teamBName) {
    const warnings = [];
    const heroesA = picksA.map(id => HERO_DATABASE.find(h => h.id === id)).filter(Boolean);
    
    heroesA.forEach(a => {
        const counter = a.counters && a.counters.find(c => picksB.includes(c.id));
        if (counter) {
            const counterHero = HERO_DATABASE.find(h => h.id === counter.id);
            warnings.push(`<strong>${a.name}</strong> (${teamAName}) bị khắc chế mạnh bởi <strong>${counterHero.name}</strong> (${teamBName}): ${counter.reason}`);
        }
    });
    return warnings;
}

function renderStatBar(label, value) {
    const pct = (parseFloat(value) / 5) * 100;
    return `
        <div class="analysis-stat-row">
            <span class="stat-label">${label}</span>
            <div class="stat-track">
                <div class="stat-fill" style="width: ${pct}%"></div>
            </div>
            <span class="stat-val">${value}/5</span>
        </div>
    `;
}

function generateDraftAnalysis() {
    const container = document.getElementById("overlay-analysis");
    if (!container) return;
    
    const bluePicks = state.picksBlue.filter(Boolean);
    const redPicks = state.picksRed.filter(Boolean);
    
    const statsBlue = getTeamStats(bluePicks);
    const statsRed = getTeamStats(redPicks);
    
    const tacticsBlue = getTactics(statsBlue);
    const tacticsRed = getTactics(statsRed);
    
    const laneNotesBlue = getLaneNotes(bluePicks, redPicks);
    const laneNotesRed = getLaneNotes(redPicks, bluePicks);
    
    const warningsBlue = getMatchupWarnings(bluePicks, redPicks, "Đội Xanh", "Đội Đỏ");
    const warningsRed = getMatchupWarnings(redPicks, bluePicks, "Đội Đỏ", "Đội Xanh");
    const allWarnings = [...warningsBlue, ...warningsRed];
    
    let warningsHtml = "";
    if (allWarnings.length > 0) {
        warningsHtml = `
            <div class="matchup-warnings">
                <h5><i class="fa-solid fa-triangle-exclamation"></i> Cảnh Báo Khắc Chế Cần Lưu Ý</h5>
                <ul>
                    ${allWarnings.map(w => `<li>${w}</li>`).join("")}
                </ul>
            </div>
        `;
    } else {
        warningsHtml = `
            <div class="matchup-warnings empty">
                <h5><i class="fa-solid fa-circle-check"></i> Cảnh Báo Khắc Chế</h5>
                <p>Không có mối đe dọa khắc chế trực tiếp nghiêm trọng nào giữa hai đội hình.</p>
            </div>
        `;
    }
    
    container.innerHTML = `
        <div class="analysis-grid">
            <!-- ĐỘI XANH -->
            <div class="analysis-team blue-analysis">
                <h4 class="blue-team-title"><i class="fa-solid fa-shield-halved"></i> ĐỘI XANH</h4>
                
                <div class="team-stat-bars">
                    ${renderStatBar("Sát thương", statsBlue.damage)}
                    ${renderStatBar("Chống chịu", statsBlue.tankiness)}
                    ${renderStatBar("Cơ động", statsBlue.mobility)}
                    ${renderStatBar("Giao tranh", statsBlue.teamfight)}
                    ${renderStatBar("Đẩy lẻ", statsBlue.split_push)}
                </div>
                
                <div class="team-tactics">
                    <h5><i class="fa-solid fa-compass"></i> Hướng Vận Hành</h5>
                    <h6>Lối chơi chính: ${tacticsBlue.title}</h6>
                    <p>${tacticsBlue.desc}</p>
                </div>
                
                <div class="team-lane-notes">
                    <h5><i class="fa-solid fa-list-check"></i> Lưu Ý Từng Vị Trí</h5>
                    <ul>
                        ${laneNotesBlue.map(n => `<li>${n}</li>`).join("")}
                    </ul>
                </div>
            </div>
            
            <!-- ĐỘI ĐỎ -->
            <div class="analysis-team red-analysis">
                <h4 class="red-team-title"><i class="fa-solid fa-shield-halved"></i> ĐỘI ĐỎ</h4>
                
                <div class="team-stat-bars">
                    ${renderStatBar("Sát thương", statsRed.damage)}
                    ${renderStatBar("Chống chịu", statsRed.tankiness)}
                    ${renderStatBar("Cơ động", statsRed.mobility)}
                    ${renderStatBar("Giao tranh", statsRed.teamfight)}
                    ${renderStatBar("Đẩy lẻ", statsRed.split_push)}
                </div>
                
                <div class="team-tactics">
                    <h5><i class="fa-solid fa-compass"></i> Hướng Vận Hành</h5>
                    <h6>Lối chơi chính: ${tacticsRed.title}</h6>
                    <p>${tacticsRed.desc}</p>
                </div>
                
                <div class="team-lane-notes">
                    <h5><i class="fa-solid fa-list-check"></i> Lưu Ý Từng Vị Trí</h5>
                    <ul>
                        ${laneNotesRed.map(n => `<li>${n}</li>`).join("")}
                    </ul>
                </div>
            </div>
        </div>
        
        ${warningsHtml}
    `;
}

// Overlay controllers
function showCompletionOverlay() {
    generateDraftAnalysis();
    document.getElementById("completion-overlay").classList.remove("hidden");
}

function hideCompletionOverlay() {
    document.getElementById("completion-overlay").classList.add("hidden");
}

// --- 9. EVENT LISTENERS INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    // Search event
    const searchInput = document.getElementById("search-input");
    const clearBtn = document.getElementById("clear-search-btn");
    
    searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value.trim();
        if (state.searchQuery.length > 0) {
            clearBtn.style.display = "block";
        } else {
            clearBtn.style.display = "none";
        }
        renderHeroGrid();
    });
    
    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        state.searchQuery = "";
        clearBtn.style.display = "none";
        renderHeroGrid();
    });
    
    // Role filter events
    const roleFiltersContainer = document.getElementById("role-filters");
    roleFiltersContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-tab")) {
            const tabs = roleFiltersContainer.querySelectorAll(".filter-tab");
            tabs.forEach(t => t.classList.remove("active"));
            
            e.target.classList.add("active");
            state.selectedRoleFilter = e.target.dataset.role;
            renderHeroGrid();
        }
    });
    
    // Recommendations lane filter events
    const recFiltersContainer = document.getElementById("rec-role-filters");
    if (recFiltersContainer) {
        recFiltersContainer.addEventListener("click", (e) => {
            const tab = e.target.closest(".rec-filter-tab");
            if (tab) {
                state.selectedRecRoleFilter = tab.dataset.role;
                renderRecommendationsAndStats();
            }
        });
    }
    
    // Sort select event
    const sortSelect = document.getElementById("sort-select");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            state.heroSortOption = e.target.value;
            renderHeroGrid();
        });
    }
    
    // Recommendation mode filter events
    const recModesContainer = document.getElementById("rec-modes");
    if (recModesContainer) {
        recModesContainer.addEventListener("click", (e) => {
            const btn = e.target.closest(".mode-btn");
            if (btn) {
                state.recommendationMode = btn.dataset.mode;
                renderRecommendationsAndStats();
            }
        });
    }
    
    // Controls events
    document.getElementById("btn-undo").addEventListener("click", handleUndo);
    document.getElementById("btn-reset").addEventListener("click", handleReset);
    
    // Overlay events
    document.getElementById("btn-overlay-close").addEventListener("click", hideCompletionOverlay);
    document.getElementById("btn-overlay-reset").addEventListener("click", () => {
        handleReset();
        hideCompletionOverlay();
    });
    
    // Initialize Theme
    initTheme();
    
    // Initialize Skip Ban Phase checkbox
    const skipBanCheckbox = document.getElementById("skip-ban-checkbox");
    if (skipBanCheckbox) {
        skipBanCheckbox.checked = state.skipBanPhase;
        skipBanCheckbox.addEventListener("change", (e) => {
            state.skipBanPhase = e.target.checked;
            localStorage.setItem("skipBanPhase", state.skipBanPhase);
            
            if (state.skipBanPhase && state.currentTurnIndex < 10) {
                state.history.push({
                    currentTurnIndex: state.currentTurnIndex,
                    bansBlue: [...state.bansBlue],
                    bansRed: [...state.bansRed],
                    picksBlue: [...state.picksBlue],
                    picksRed: [...state.picksRed]
                });
                state.bansBlue = [null, null, null, null, null];
                state.bansRed = [null, null, null, null, null];
                state.currentTurnIndex = 10;
                renderUI();
            } else if (!state.skipBanPhase && state.currentTurnIndex === 10) {
                const noPicks = state.picksBlue.every(p => p === null) && state.picksRed.every(p => p === null);
                if (noPicks) {
                    state.currentTurnIndex = 0;
                    renderUI();
                }
            }
        });
    }
    
    // Auto-skip ban phase on boot if setting is active
    if (state.skipBanPhase && state.currentTurnIndex === 0) {
        state.currentTurnIndex = 10;
    }
    
    // Boot app
    renderUI();
});
